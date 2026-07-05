# Deploying the Xcel iSolutions site to IIS (Node.js)

This app runs as a **Node.js server** (it has a server-side API route — the Resend
contact form — and uses Next.js image optimization). The build produces a self-contained
server in **`.next/standalone`**. IIS sits in front as a **reverse proxy** and forwards
requests to the Node process.

```
Browser ──► IIS (:80 / :443)  ──reverse proxy──►  node server.js (127.0.0.1:3000)
            www.xcelisolutions.com                 ├─ pages / SSR
            + TLS certificate                       ├─ /api/contact  → Resend
                                                     └─ image optimization
```

---

## A. Build the publish artifact (on a build machine with Node 18+)

```bash
npm ci
npm run build
```

`npm run build` runs a `postbuild` step that assembles a **complete, ready-to-run**
folder at **`.next/standalone`**:

```
.next/standalone/
├── server.js          ← the entry point (node server.js)
├── package.json
├── node_modules/       ← trimmed to only what the server needs
├── .next/static/       ← hashed JS/CSS assets
└── public/             ← team photos, icon, robots, etc.
```

That entire `.next/standalone` folder is your deployable payload. Nothing else is needed
(you do **not** copy `node_modules`, source, or `.env` from the project root).

> Quick local check before shipping: `npm run start:standalone` then open
> http://localhost:3000.

---

## B. Prepare the Windows server

1. **Install Node.js LTS** (same major version you built with, e.g. 20 or 22) from
   nodejs.org — the MSI adds `node` to PATH for all users.
2. **Install the two IIS modules** (once per server):
   - **URL Rewrite** — https://www.iis.net/downloads/microsoft/url-rewrite
   - **Application Request Routing (ARR)** — https://www.iis.net/downloads/microsoft/application-request-routing
3. **Enable the proxy in ARR:** open **IIS Manager → (server node) →
   Application Request Routing Cache → Server Proxy Settings** (right pane) →
   tick **Enable proxy** → **Apply**.

---

## C. Copy files & run Node as a Windows Service

Copy `.next/standalone` to the server, e.g. `C:\apps\xcelisolutions`.

The Node process must stay running and restart on boot/crash. Use **NSSM** (simplest) or
PM2. Using **NSSM** (https://nssm.cc):

```powershell
# Install the service (run PowerShell as Administrator)
nssm install XcelSite "C:\Program Files\nodejs\node.exe" "C:\apps\xcelisolutions\server.js"
nssm set XcelSite AppDirectory "C:\apps\xcelisolutions"

# Bind Node to localhost only (IIS is the public face) and set the port + secrets
nssm set XcelSite AppEnvironmentExtra ^
  HOSTNAME=127.0.0.1 ^
  PORT=3000 ^
  NODE_ENV=production ^
  RESEND_API_KEY=re_your_real_key_here ^
  CONTACT_TO_EMAIL=info@xcelisolutions.com ^
  "CONTACT_FROM_EMAIL=Xcel iSolutions <onboarding@resend.dev>"

nssm start XcelSite
```

Verify Node is up locally on the server:

```powershell
curl http://127.0.0.1:3000/        # should return HTML
```

> **Env vars:** setting them on the service (as above) is the recommended way to hold the
> Resend key. Alternatively drop a `.env.production` file next to `server.js` — the
> standalone server loads it at startup — but service env vars keep secrets out of files.

---

## D. Configure the IIS site (reverse proxy)

1. **IIS Manager → Sites → Add Website:**
   - **Site name:** `Xcel iSolutions`
   - **Physical path:** a small folder that holds only the `web.config` below,
     e.g. `C:\apps\xcelisolutions-proxy` (it does **not** need the app files).
   - **Binding:** http, port 80, host name `www.xcelisolutions.com`.
   - App pool: **No Managed Code** (IIS is just proxying).
2. Put this **`web.config`** in that physical path:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <!-- Forward every request to the Node server on localhost:3000 -->
        <rule name="ReverseProxyToNode" stopProcessing="true">
          <match url="(.*)" />
          <action type="Rewrite" url="http://127.0.0.1:3000/{R:1}" />
        </rule>
      </rules>
    </rewrite>
    <!-- Let the browser cache immutable hashed assets aggressively -->
    <caching enabled="true" />
    <httpProtocol>
      <customHeaders>
        <remove name="X-Powered-By" />
      </customHeaders>
    </httpProtocol>
  </system.webServer>
</configuration>
```

3. Browse to the site — the homepage should load, served by Node through IIS.

---

## E. HTTPS (recommended)

Add an **https binding** on port 443 with your TLS certificate
(IIS Manager → site → **Bindings → Add**), or automate issuance/renewal with
**win-acme** (Let's Encrypt for Windows). No app change needed — IIS terminates TLS and
proxies plain HTTP to Node on localhost.

---

## F. Sending real email (Resend)

The contact form calls the server route, which sends via **Resend**:

1. Get an API key at **resend.com → API Keys**.
2. Set `RESEND_API_KEY` on the service (step C) and restart it (`nssm restart XcelSite`).
3. For production deliverability, **verify the `xcelisolutions.com` domain** in Resend,
   then set `CONTACT_FROM_EMAIL` to a verified sender, e.g.
   `Xcel iSolutions <hello@xcelisolutions.com>` (replaces the shared `onboarding@resend.dev`
   tester). `CONTACT_TO_EMAIL` is where enquiries land.

Until a key is set, the form returns a friendly "email service is not configured" message.

---

## G. Updating the site later

1. On the build machine: `npm ci && npm run build`.
2. Copy the new `.next/standalone` over `C:\apps\xcelisolutions` (stop the service first
   for a clean swap): `nssm stop XcelSite` → copy → `nssm start XcelSite`.

---

## Alternative: iisnode (host Node inside IIS)

Instead of the reverse proxy, you can host the process with the **iisnode** module and a
`web.config` that maps requests to `server.js`. It works but is less actively maintained
than the ARR reverse-proxy approach above, which is why the reverse proxy is recommended.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| **502.3 / "bad gateway"** in IIS | Node isn't running or wrong port. Check `nssm status XcelSite`, and `curl http://127.0.0.1:3000/` on the server. |
| **Homepage loads but no styles** | `.next/static` wasn't copied. Re-run `npm run build` (the `postbuild` step copies it) and redeploy the whole `.next/standalone`. |
| **Contact form says "not configured"** | `RESEND_API_KEY` isn't set on the service. Set it and `nssm restart XcelSite`. |
| **Rewrite rule rejected / 500.19** | URL Rewrite and/or ARR not installed, or **Enable proxy** is off (step B3). |
| **Emails send but land in spam** | Verify the sending domain in Resend and use a domain sender for `CONTACT_FROM_EMAIL`. |
| **Service won't start on boot** | Confirm the Node path in NSSM and that `AppDirectory` points at the folder containing `server.js`. |
