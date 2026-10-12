// Turns dist/ into an artifact-ready fragment (no doctype/html/head/body) with relative asset paths.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";
const dist = "dist", out = "artifact";
mkdirSync(join(out, "assets"), { recursive: true });
let html = readFileSync(join(dist, "index.html"), "utf8");
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
const title = head.match(/<title>[\s\S]*?<\/title>/)[0];
const keep = [...head.matchAll(/<(?:meta name="description"|link rel="preconnect"|link rel="stylesheet" href="https:\/\/fonts)[^>]*>/g)].map(m => m[0]);
const inlineStyles = [...head.matchAll(/<style>[\s\S]*?<\/style>/g)].map(m => m[0]);
const cssFiles = [...head.matchAll(/<link rel="stylesheet" href="\/(assets\/[^"]+\.css)">/g)].map(m => m[1]);
const css = cssFiles.map(f => readFileSync(join(dist, f), "utf8").replace(/url\(\/assets\//g, "url(assets/")).join("\n");
let page = [title, ...keep, ...inlineStyles, `<style>\n${css}\n</style>`, body].join("\n");
page = page.replace(/(["(,\s])\/assets\//g, "$1assets/");
writeFileSync(join(out, "index.html"), page);
let n = 0;
for (const f of readdirSync(join(dist, "assets"))) if (!f.endsWith(".css")) { copyFileSync(join(dist, "assets", f), join(out, "assets", f)); n++; }
console.log(`artifact/index.html ${page.length} bytes, ${n} asset files, absolute refs left: ${(page.match(/\/assets\//g) || []).length}`);
