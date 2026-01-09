# Images Directory

## Current Images

### Personal Photo
- **File**: `me.jpeg`
- **Usage**: Profile photo on the cover page
- **Location**: `CoverPage.tsx` - displays in circular frame
- **Description**: Behnam Rahimpour's professional photo

### Cover Image
- **File**: `cover-page.png`
- **Usage**: Available for book cover background/texture (optional)
- **Description**: Book cover design image

## Technology Logos

The `logos/` subdirectory contains technology and skill logos referenced in the Skills page.
See `logos/README.md` for the complete list and download instructions.

## Image Optimization

All images should use Next.js's `<Image>` component for automatic optimization:
- Automatic WebP conversion
- Responsive sizing
- Lazy loading
- Blur placeholder

## Adding New Images

1. Place images in this directory (`public/assets/images/`)
2. Reference them with `/assets/images/filename.ext` in components
3. Use the `ImageWrapper` component for consistent styling
4. Recommended formats: JPG, PNG, WebP
5. Optimize large images before adding (compress, resize)

## Notes

- All images in `public/` are accessible via URL
- Next.js automatically optimizes images at build time
- Images outside `public/` won't be accessible in production


