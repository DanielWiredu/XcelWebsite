import { NextResponse } from "next/server";
import { Resend } from "resend";

// Basic email shape check (kept dependency-free)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  // Honeypot — bots fill hidden fields; humans leave it empty
  website?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const companyName = body.company?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Honeypot: silently accept to avoid tipping off bots
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and a message." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? "info@xcelisolutions.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Xcel iSolutions <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#141a3c">
          <h2 style="margin:0 0 16px;font-size:18px">New website enquiry</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:6px 0;color:#64748b;width:120px">Name</td><td style="padding:6px 0"><strong>${escapeHtml(name)}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#64748b">Email</td><td style="padding:6px 0">${escapeHtml(email)}</td></tr>
            ${companyName ? `<tr><td style="padding:6px 0;color:#64748b">Company</td><td style="padding:6px 0">${escapeHtml(companyName)}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:6px 0;color:#64748b">Needs</td><td style="padding:6px 0">${escapeHtml(service)}</td></tr>` : ""}
          </table>
          <p style="margin:20px 0 6px;color:#64748b;font-size:14px">Message</p>
          <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
      text: `New website enquiry\n\nName: ${name}\nEmail: ${email}${companyName ? `\nCompany: ${companyName}` : ""}${service ? `\nNeeds: ${service}` : ""}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
