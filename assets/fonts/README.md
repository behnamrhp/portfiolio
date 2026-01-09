# Fonts

This project uses **Google Fonts** loaded via Next.js's `next/font/google` feature:

- **Cormorant** - Headings and decorative text
- **EB Garamond** - Body text and readable content

## Why Google Fonts?

The fonts are loaded automatically by Next.js with:
- Automatic optimization
- Font subsetting
- Self-hosting for privacy and performance
- Zero layout shift (font metrics loaded in advance)

## Font Configuration

See `app/layout.tsx` for the font configuration. The fonts are loaded with:
- Variable font support for multiple weights
- `swap` display strategy for better performance
- Latin subset only (can be extended if needed)

## Available Weights

**Cormorant**: 300, 400, 500, 600, 700  
**EB Garamond**: 400, 500, 600, 700

## Usage in Tailwind

The fonts are available as CSS variables:
```css
--font-cormorant
--font-garamond
```

Use them in Tailwind with:
```jsx
<div className="font-cormorant">Heading text</div>
<div className="font-garamond">Body text</div>
```


