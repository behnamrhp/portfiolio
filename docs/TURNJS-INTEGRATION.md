# Turn.js Integration Guide

## Overview

This portfolio now uses **turn.js** for realistic book page-turning animations, following the same implementation pattern from the [whiteboard tool project](https://github.com/behnamrhp/whiteboadTool/blob/main/src/component/Book/Turn/index.js).

## What Changed

### Dependencies Added

```json
{
  "dependencies": {
    "jquery": "^3.7.1",
    "turn.js": "^1.0.5"
  },
  "devDependencies": {
    "@types/jquery": "^3.5.29"
  }
}
```

### New Files Created

1. **`input/turnConfig.ts`**
   - Turn.js configuration options
   - Responsive sizing based on mobile/desktop
   - Default settings (width, height, acceleration, etc.)

2. **`types/turn.d.ts`**
   - TypeScript declarations for turn.js
   - jQuery extensions for turn methods

3. **`app/turn.css`**
   - Required CSS for turn.js page effects
   - Shadow and gradient styling
   - Responsive adjustments

### Modified Files

1. **`views/organisms/BookContainer/BookContainer.tsx`**
   - Complete rewrite to use turn.js
   - Dynamic loading of jQuery and turn.js (client-side only)
   - Turn.js initialization with proper refs
   - Page change callbacks integrated with React state

2. **`app/layout.tsx`**
   - Added `import "./turn.css"`

3. **`types/global.d.ts`**
   - Added Window interface for jQuery/$ globals

## How It Works

### Initialization Flow

1. **Component Mounts** → Detect if mobile/desktop
2. **Load Libraries** → Dynamically import jQuery and turn.js
3. **Initialize Turn.js** → Call `.turn(options)` on the flipbook container
4. **Render Pages** → Each page is a `<div>` with class `.page`
5. **Handle Callbacks** → `turning` callback updates React state

### Key Features

- ✅ **Realistic Page Flipping**: 3D page turn animations
- ✅ **Corner Dragging**: Grab and drag page corners
- ✅ **Responsive**: Single page (mobile) or double page (desktop)
- ✅ **Shadow Effects**: Automatic gradient shadows between pages
- ✅ **Keyboard/Arrow Navigation**: Still works alongside turn.js
- ✅ **React Integration**: Turn.js state synced with React state

### Configuration

The turn.js configuration is in `input/turnConfig.ts`:

```typescript
export const TurnJsConfigs = {
  width: 1400,          // Desktop width
  height: 900,          // Desktop height
  autoCenter: true,     // Center the book
  display: 'single',    // 'single' or 'double' page
  acceleration: true,   // Hardware acceleration
  elevation: 50,        // Shadow elevation
  gradients: true,      // Enable gradient shadows
};
```

### Page Structure

Each page in the book follows this structure:

```tsx
<div className="page" data-page-number={index + 1}>
  <div className="font-garamond text-manuscript-ink h-full">
    {page.content}
  </div>
</div>
```

## Usage

### Basic Example

```tsx
import { BookContainer } from '@/views/organisms';
import { CoverPage, AboutPage } from '@/views/pages';

const pages = [
  { id: 'cover', title: 'Cover', path: '/', content: <CoverPage /> },
  { id: 'about', title: 'About', path: '/about', content: <AboutPage /> },
];

<BookContainer pages={pages} currentPage={0} />
```

### Programmatic Navigation

```tsx
// The BookContainer internally manages turn.js
// You can navigate via props:
<BookContainer 
  pages={pages} 
  currentPage={pageIndex}  // Controlled component
  onPageChange={(newPage) => console.log('Page changed to:', newPage)}
/>
```

## Turn.js Methods Available

The component internally uses these turn.js methods:

- `.turn('page')` - Get current page
- `.turn('page', n)` - Go to page n
- `.turn('next')` - Next page
- `.turn('previous')` - Previous page
- `.turn('disable', bool)` - Enable/disable turning
- `.turn('destroy')` - Cleanup on unmount

## Responsive Behavior

### Desktop (≥1024px)
- Display: Double page spread
- Width: 90% of viewport (max 1400px)
- Height: 85% of viewport (max 900px)
- Navigation: Corners, arrows, keyboard

### Mobile (<1024px)
- Display: Single page
- Width: 95% of viewport
- Height: 85% of viewport
- Navigation: Corners, arrows, swipe

## Styling

The turn.js CSS includes:

```css
.flipbook                 /* Main container */
.flipbook .page          /* Individual pages */
.flipbook .even/.odd     /* Shadow gradients */
.flipbook .turn-page     /* Active turning page */
.flipbook.grabbing       /* Cursor during drag */
```

You can customize these in `app/turn.css`.

## Troubleshooting

### jQuery Not Found

**Error**: `$ is not defined`

**Solution**: The component loads jQuery dynamically. Ensure:
- jQuery is in dependencies
- Component is client-side only (`'use client'`)

### Pages Not Rendering

**Error**: Pages show but don't turn

**Solution**: Check that:
- Pages have `.page` class
- Container has ref assigned
- turn.js initialization completed

### TypeScript Errors

**Error**: Type errors on `.turn()` method

**Solution**: Ensure:
- `types/turn.d.ts` exists
- `@types/jquery` is installed
- tsconfig includes `types/` folder

## References

- [turn.js Documentation](http://www.turnjs.com/#docs)
- [Original Implementation](https://github.com/behnamrhp/whiteboadTool/blob/main/src/component/Book/Turn/index.js)
- [jQuery Documentation](https://api.jquery.com/)

## Next Steps

After running `pnpm install`, test the book by:

1. Start dev server: `pnpm dev`
2. Open http://localhost:3000
3. Try dragging page corners
4. Test keyboard navigation (← →)
5. Test on mobile viewport

The book should now have realistic page-turning animations! 📖✨


