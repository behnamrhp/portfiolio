# Quick Reference Guide

## Key Technical Decisions

### Architecture
- **Pattern**: MVVM (Model-View-ViewModel)
- **View Structure**: Atomic Design (atoms/molecules/organisms/templates/pages)
- **Models**: Data fetching and business logic
- **ViewModels**: Custom hooks for UI logic

### Technology Stack
- **Framework**: Next.js (TypeScript)
- **Rendering**: SSG (Static Site Generation)
- **Styling**: Tailwind CSS
- **Page Turns**: turn.js library
- **Drag Interaction**: all-drag library
- **Deployment**: GitHub Pages

### Color Palette
```
Primary (Aged Paper):   #EFE3C6
Secondary (Night Ink):  #1F1B17
Tertiary (Lapis Blue):  #1F4E79
```

### Typography
- **Titles/Cover**: Cormorant (local font)
- **Body Content**: EB Garamond (local font)

### Responsive Breakpoints
- **Mobile/Tablet**: Single page book
- **Laptop+**: Double page book
- **All Screens**: Book covers 90%+ of viewport

### Input Data Files Location
```
/input
  ├── dict.ts          # All copy/content
  ├── constants.ts     # CV_LINK, etc.
  ├── skills.ts        # Skills data
  └── projects.ts      # Projects data
```

### Pages Structure
1. **/** - Book Cover (hard cover, image, title)
2. **/about** - Who is he? (bio, help scenarios, CV link)
3. **/skills** - Skills (draggable logos by category)
4. **/projects** - Open source projects (5 projects)
5. **/articles** - Articles from dev.to (paginated, client-side)

### Key Features
- ✅ Page turns on scroll (throttled/debounced)
- ✅ Keyboard navigation (left/right arrows)
- ✅ Navigation arrows (ancient Persian style)
- ✅ Bookmarks for each page (clickable, overflow handling)
- ✅ No page scroll (only book content scrolls)
- ✅ URL routing per page (no refresh)
- ✅ Dynamic years of experience calculation
- ✅ Client-side article fetching (always fresh)

### Environment Variables
```
ARTICLE_API_KEY=<dev.to API key>
```

### Important Notes
- ⚠️ All fonts must be local (no dynamic loading)
- ⚠️ All images use Next.js Image component
- ⚠️ Grammar check all content before adding
- ⚠️ Articles NOT pre-rendered (client-side only)
- ⚠️ GitHub Pages requires specific Next.js config

### Project Structure Example
```
/src
  /models
    articleModel.ts
  /viewmodels
    useArticles.ts
  /views
    /atoms
    /molecules
    /organisms
    /templates
    /pages
  /assets
    /fonts
    /images
  /input
    dict.ts
    constants.ts
    skills.ts
    projects.ts
```

## Work Session Checklist

### Starting a New Phase
- [ ] Read the phase details in project-phases.md
- [ ] Review PRD for specific requirements
- [ ] Check dependencies with previous phases
- [ ] Create/update input data files if needed

### During Development
- [ ] Follow MVVM architecture
- [ ] Use atomic design for components
- [ ] Test on mobile and desktop
- [ ] Use local fonts only
- [ ] Optimize images with Next.js Image
- [ ] Keep Persian theme consistent

### Before Completing a Task
- [ ] Test responsiveness
- [ ] Check browser console for errors
- [ ] Verify colors match palette
- [ ] Ensure proper typography
- [ ] Test all interactions
- [ ] Update task status

### Code Quality
- [ ] TypeScript types properly defined
- [ ] No console errors or warnings
- [ ] Components are reusable
- [ ] Clean code, well-commented
- [ ] Follow Tailwind conventions

