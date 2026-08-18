import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const siteDir = join(root, "site")
const publicDir = join(root, "public")

const LEGACY_REWRITES = [
  { source: "/blog/paddington-square", destination: "/blog-post-paddington.html" },
  { source: "/blog/enhancing-security-paddington", destination: "/blog-post-paddington2.html" },
  { source: "/blog/crowd-management-ai", destination: "/blog-post-crowd.html" },
  { source: "/blog/tony-fish-podcast", destination: "/blog-post-podcast.html" },
  { source: "/blog/edge-ai-pny", destination: "/blog-post-smartfacilities.html" },
  { source: "/blog/nvidia-inception", destination: "/blog-post-nvidiaprogram.html" },
]

const HEAD_INJECT = [
  '<base href="/">',
  '<link rel="icon" href="/icon.svg" type="image/svg+xml">',
  '<script async src="https://www.googletagmanager.com/gtag/js?id=G-VVLW38ZKQ8"></script>',
  "<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VVLW38ZKQ8');</script>",
].join("\n")

const STYLE_FALLBACK = [
  '<script src="https://cdn.tailwindcss.com"></script>',
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">',
  "<style>body{font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}</style>",
].join("\n")

const BODY_INJECT = '<script src="/site-runtime.js" defer></script>'

function isJunkAsset(url = "") {
  return /_files\/|_next\/static/i.test(url)
}

function stripAuraAndSavedPageJunk(html) {
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (block) => {
    const src = /src=["']([^"']+)["']/i.exec(block)?.[1] || ""
    if (isJunkAsset(src)) return ""
    if (/aura-preview-performance-controller|_next-ga|__next_f|__next_f=/.test(block)) return ""
    if (/id=["']_next-ga-init["']/i.test(block)) return ""
    return block
  })

  html = html.replace(/<(?:link|img)\b[^>]*>/gi, (tag) => {
    const url = /(?:href|src)=["']([^"']+)["']/i.exec(tag)?.[1] || ""
    return isJunkAsset(url) ? "" : tag
  })

  return html
    .replace(/<next-route-announcer\b[^>]*>[\s\S]*?<\/next-route-announcer>/gi, "")
    .replace(/<!--\$-->\s*<!--\/\$-->/g, "")
}

function insertBeforeHeadClose(html, snippet) {
  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `${snippet}\n</head>`)
  }
  if (/<head[\s>]/i.test(html)) {
    return html.replace(/<head([^>]*)>/i, `<head$1>\n${snippet}`)
  }
  return `${snippet}\n${html}`
}

function ensurePageStyles(html) {
  if (!/cdn\.tailwindcss\.com/i.test(html)) {
    html = insertBeforeHeadClose(html, STYLE_FALLBACK)
  } else if (!/fonts\.googleapis\.com\/css2\?family=Inter/i.test(html)) {
    html = insertBeforeHeadClose(
      html,
      '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n<style>body{font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}</style>',
    )
  }
  return html
}

function injectHelpers(html) {
  if (/<base\s+href=/i.test(html)) {
    html = html.replace(/<base\s+href=["'][^"']*["']\s*\/?>/i, '<base href="/">')
  }

  if (/<head[\s>]/i.test(html)) {
    html = html.replace(/<head([^>]*)>/i, `<head$1>\n${HEAD_INJECT}`)
  } else {
    html = `${HEAD_INJECT}\n${html}`
  }

  if (/<\/body>/i.test(html)) {
    html = html.replace(/<\/body>/i, `${BODY_INJECT}\n</body>`)
  } else {
    html += `\n${BODY_INJECT}`
  }

  return html
}

function prepareHtml(html) {
  return injectHelpers(ensurePageStyles(stripAuraAndSavedPageJunk(html)))
}

mkdirSync(publicDir, { recursive: true })

const htmlFiles = readdirSync(siteDir)
  .filter((name) => name.toLowerCase().endsWith(".html"))
  .sort()

if (htmlFiles.length === 0) {
  throw new Error("No HTML files found in site/. Export from Aura into that folder first.")
}

const htmlRewrites = []

for (const name of htmlFiles) {
  const prepared = prepareHtml(readFileSync(join(siteDir, name), "utf8"))
  writeFileSync(join(publicDir, name), prepared)

  if (name.toLowerCase() === "index.html") {
    htmlRewrites.push({ source: "/", destination: "/index.html" })
    continue
  }

  const slug = name.replace(/\.html$/i, "")
  htmlRewrites.push({ source: `/${slug}`, destination: `/${name}` })
}

const generated = `export const htmlRewrites = ${JSON.stringify([...htmlRewrites, ...LEGACY_REWRITES], null, 2)}\n`

writeFileSync(join(root, "site-routes.generated.mjs"), generated)

console.log(`Prepared ${htmlFiles.length} HTML pages from site/`)
htmlFiles.forEach((name) => console.log(`  - ${name}`))
