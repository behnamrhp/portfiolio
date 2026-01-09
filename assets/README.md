# Assets Directory

## Fonts

The `fonts/` directory contains documentation for the Google Fonts used in this project:
- **Cormorant** - For headings and decorative text
- **EB Garamond** - For body text

Fonts are loaded via Next.js's `next/font/google` and are automatically optimized.

See `fonts/README.md` for more details.

## Images

**Note**: Images are located in `public/assets/images/` (not here).

Next.js requires publicly accessible assets to be in the `public/` directory for proper optimization and serving.

Current images:
- `public/assets/images/me.jpeg` - Personal photo
- `public/assets/images/cover-page.png` - Book cover image
- `public/assets/images/logos/` - Technology logos

See `public/assets/images/README.md` for image documentation.

## Structure

```
/assets
  /fonts        → Font documentation (actual fonts loaded via Google Fonts)

/public/assets  → Publicly accessible assets
  /images       → All images (personal photos, logos, etc.)
```


