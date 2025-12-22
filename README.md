# U4IA Landing Page

Partner Activation Platform landing page.

## Files

- `index.html` — Main landing page
- `hero-video.mp4` — Hero section background video (placeholder - replace with your own)
- `_headers` — Cloudflare Pages caching configuration

## Deploy to Cloudflare Pages

1. Push this repo to GitHub

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project

3. Connect your GitHub repository

4. Build settings:
   - Build command: (leave blank)
   - Build output directory: `/` or (leave blank)

5. Deploy

6. Add custom domain in Settings → Custom domains

## Before Launch Checklist

- [ ] Replace `hero-video.mp4` with your actual hero video
- [ ] Update all `href="#"` links to actual Chrome Web Store URL
- [ ] Add favicon.ico to root folder
- [ ] Add analytics script before closing `</body>` tag
- [ ] Test on mobile devices

## Video Optimization

If your hero video is large (>10MB), consider:
- Compressing with HandBrake or ffmpeg
- Hosting on Cloudflare R2 and linking externally
- Using a CDN like Bunny.net

## Local Preview

```bash
npx serve .
```

Then open http://localhost:3000

---

Built: December 22, 2025
