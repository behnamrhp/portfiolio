# Setup Instructions

## Phase 1 Complete! ✅

The project foundation has been set up. Here's what's been configured:

### ✅ Completed
- [x] Next.js 14 with TypeScript
- [x] Tailwind CSS with Persian color palette
- [x] SSG configuration (static export)
- [x] MVVM + Atomic Design folder structure
- [x] Input data files with TypeScript types
- [x] Project documentation

### 🔧 Next Steps

#### 1. Install Dependencies

You need Node.js installed. Then run:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

**Note**: Fonts are loaded automatically via Google Fonts (no manual download needed).

#### 2. Configure Environment Variables

Create a `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Then add your dev.to API key:
```
NEXT_PUBLIC_ARTICLE_API_KEY=your_api_key_here
```

Get your API key from: https://dev.to/settings/extensions

#### 3. Update Personal Information

Edit these files with your information:

- `input/constants.ts` - Update `CV_LINK` with your CV URL
- `input/dict.ts` - Verify the bio content is correct
- Add your personal image to `assets/images/` for the cover page

#### 4. Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 📋 What's Configured

#### Tailwind Colors
The Persian palette is already configured in `tailwind.config.ts`:
- `manuscript-paper`: #EFE3C6
- `manuscript-ink`: #1F1B17
- `manuscript-lapis`: #1F4E79

Use in components:
```tsx
<div className="bg-manuscript-paper text-manuscript-ink">
  <a className="text-manuscript-lapis">Link</a>
</div>
```

#### Font Classes
Fonts are loaded via Google Fonts in `app/layout.tsx`:
- `font-cormorant` - For titles and cover (Cormorant)
- `font-garamond` - For body text (EB Garamond)

Both fonts are automatically optimized and self-hosted by Next.js.

Use in components:
```tsx
<h1 className="font-cormorant">Title</h1>
<p className="font-garamond">Body text</p>
```

#### Project Structure

```
📁 MVVM Architecture:
  /models - Data fetching & business logic
  /viewmodels - Custom hooks (UI logic)
  /views - UI components (Atomic Design)
    /atoms - Basic components
    /molecules - Compound components
    /organisms - Complex components
    /templates - Page templates
    /pages - Full pages

📁 Content:
  /input - All content centralized here
    dict.ts - Copy/text
    skills.ts - Skills data
    projects.ts - Projects data
    constants.ts - Config values

📁 Assets:
  /assets
    /fonts - Local fonts
    /images - Images & logos
```

### 🎯 Ready for Phase 2

Once you've completed steps 1-4 above, you're ready to start **Phase 2: Design System & Core Components**.

See `docs/tasks/project-phases.md` for the next steps.

### ⚠️ Important Notes

1. **Fonts are optimized** - Loaded via Google Fonts and self-hosted by Next.js
2. **All images** should use Next.js `<Image>` component
3. **Content updates** - Edit files in `input/` directory only
4. **Follow MVVM** - Keep models, viewmodels, and views separate
5. **Use Atomic Design** - Build from atoms → molecules → organisms

### 🐛 Troubleshooting

**Problem**: npm/node not found
- **Solution**: Install Node.js 18+ from https://nodejs.org/

**Problem**: Fonts not loading
- **Solution**: Fonts are loaded automatically via Google Fonts. Check your internet connection.

**Problem**: TypeScript errors
- **Solution**: Run `npm install` to install all type definitions

**Problem**: Build fails
- **Solution**: Check that all dependencies are installed

### 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Next.js Fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

**Ready to continue?** Follow `docs/tasks/project-phases.md` for Phase 2!

