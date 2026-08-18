# Percepvision Website

Marketing pages are plain HTML exported from Aura. Vercel still deploys automatically after a GitHub push.

## Update the live site

1. In Aura, export the page as HTML.
2. Overwrite the matching file in `site/` (keep the same filename).
3. Commit and push to GitHub.
4. Vercel builds and updates [percepvision.com](https://percepvision.com).

Do not edit files in `public/*.html`. Those copies are generated during build.

## File map

| Aura export | Live URL | Old URL still works |
| --- | --- | --- |
| `site/index.html` | `/` |  |
| `site/solutions.html` | `/solutions` |  |
| `site/contact.html` | `/contact` |  |
| `site/blog.html` | `/blog` |  |
| `site/privacy-policy.html` | `/privacy-policy` |  |
| `site/terms-of-use.html` | `/terms-of-use` |  |
| `site/blog-post-paddington.html` | `/blog-post-paddington` | `/blog/paddington-square` |
| `site/blog-post-paddington2.html` | `/blog-post-paddington2` | `/blog/enhancing-security-paddington` |
| `site/blog-post-crowd.html` | `/blog-post-crowd` | `/blog/crowd-management-ai` |
| `site/blog-post-podcast.html` | `/blog-post-podcast` | `/blog/tony-fish-podcast` |
| `site/blog-post-smartfacilities.html` | `/blog-post-smartfacilities` | `/blog/edge-ai-pny` |
| `site/blog-post-nvidiaprogram.html` | `/blog-post-nvidiaprogram` | `/blog/nvidia-inception` |

A new Aura page becomes a new file, for example `site/about.html` → `https://percepvision.com/about`.

## What the build still handles for you

- Strips Aura preview scripts
- Wires the contact form to `/api/send`
- Keeps Google Analytics
- Keeps existing `/blog/...` links working

## Local preview

```bash
npm run dev
```
