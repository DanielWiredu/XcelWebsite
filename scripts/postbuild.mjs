// After `next build` with output: "standalone", Next.js does NOT copy the static
// assets or the public/ folder into .next/standalone. This script does, so that
// .next/standalone becomes a complete, self-contained deployment artifact:
//
//   .next/standalone/
//   ├── server.js         ← run with `node server.js`
//   ├── node_modules/     ← trimmed to only what's needed
//   ├── .next/static/     ← (copied here)
//   └── public/           ← (copied here)
//
import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.log('[postbuild] No .next/standalone (output: "standalone" not set) — skipping.');
  process.exit(0);
}

cpSync(join(root, ".next", "static"), join(standalone, ".next", "static"), { recursive: true });

if (existsSync(join(root, "public"))) {
  cpSync(join(root, "public"), join(standalone, "public"), { recursive: true });
}

console.log(
  "[postbuild] Copied .next/static and public/ into .next/standalone — ready to deploy.",
);
