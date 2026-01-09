# Portfolio Project - Phases & Tasks Breakdown

## Overview
This document breaks down the Persian Ancient Book-themed portfolio website into manageable phases and tasks. Each phase represents a logical grouping of work that should be handled together.

---

## ⚠️ Migration Notice: Next.js → React + React Router

**Status**: Project is being migrated from Next.js SSG to React with React Router for more flexibility in page navigation and URL updates without page refresh.

### Tasks Requiring Updates:
- **Phase 1.1**: Initialize React project with React Router (instead of Next.js)
- **Phase 3.2**: Implement routing with React Router (instead of Next.js Router)
- **Phase 8.1**: Configure React build for GitHub Pages (instead of Next.js export)

### What Needs to Change:
1. Replace Next.js App Router with React Router
2. Update routing hooks to use React Router's `useNavigate` and `useLocation`
3. Update build configuration for React (instead of Next.js static export)
4. Update image components to use standard img tags or React image libraries
5. Update GitHub Actions workflow for React build process

---

## Phase 1: Project Foundation & Setup ⚠️ NEEDS UPDATE
**Goal**: Set up the React project with React Router and all necessary configurations, dependencies, and core architecture.

### Tasks:
- [ ] **1.1 Initialize React Project** ⚠️ NEEDS UPDATE
  - Create React project with TypeScript
  - Install and configure React Router for client-side routing
  - Set up project folder structure following MVVM + Atomic Design

- [x] **1.2 Install Core Dependencies** ✅
  - Install and configure Tailwind CSS
  - Add turn.js library for book page turns
  - Install all-drag library for skills page
  - Set up any other required npm packages

- [x] **1.3 Configure Fonts** ✅
  - Download and add Cormorant font to assets
  - Download and add EB Garamond font to assets
  - Configure local font loading (no dynamic loading)

- [x] **1.4 Set Up Color Palette** ✅
  - Create Tailwind theme configuration with Persian palette:
    - Primary: #EFE3C6 (Aged Manuscript Paper)
    - Secondary: #1F1B17 (Night Ink)
    - Tertiary: #1F4E79 (Lapis Lazuli Blue)

- [x] **1.5 Create Project Architecture** ✅
  - Set up MVVM folder structure:
    - `/models` - Data fetching and business logic
    - `/viewmodels` - Custom hooks for UI logic
    - `/views` - Components following atomic design
  - Create atomic design structure:
    - `/atoms`
    - `/molecules`
    - `/organisms`
    - `/templates`
    - `/pages`

- [x] **1.6 Create Input Data Files** ✅
  - Create `input/dict.ts` for all content/copy
  - Create `input/constants.ts` for CV_LINK and other constants
  - Create `input/skills.ts` for skills data structure
  - Create `input/projects.ts` for project data structure

---

## Phase 2: Design System & Core Components ✅ COMPLETE
**Goal**: Build reusable UI components that match the Persian ancient book theme.

### Tasks:
- [x] **2.1 Create Atomic Components (Atoms)** ✅
  - Button component with ancient Persian style
  - Text components (headings, body text)
  - Image wrapper component (standard img with optimization)
  - Border/ornamental line components
  - Loading skeleton component

- [x] **2.2 Create Molecular Components** ✅
  - Bookmark component
  - Page navigation arrows (flesh style)
  - Pagination controls
  - Article card component
  - Skill icon component (draggable)

- [x] **2.3 Create Layout Components (Organisms)** ✅
  - Book container component
  - Page layout component (single and double page)
  - Header/navigation system
  - Footer component (if needed)

- [x] **2.4 Responsive Breakpoints** ✅
  - Configure breakpoints for mobile (single page)
  - Configure breakpoints for tablet (single page)
  - Configure breakpoints for laptop+ (double page)
  - Ensure book covers 90%+ of screen on all sizes

---

## Phase 3: Book Infrastructure & Navigation ✅ COMPLETE
**Goal**: Implement the core book functionality with page turning, routing, and bookmarks.

### Tasks:
- [x] **3.1 Custom Page-Turn Animation System** ✅
  - Created modern React-based solution (replaced turn.js)
  - Implemented CSS 3D animations
  - Added direction tracking and animation states

- [x] **3.2 Implement Page Routing with window.history API** ✅
  - Implemented URL management using window.history.pushState()
  - Created routing system where each page = URL path
  - Implemented path changes without page refresh (no React Router re-renders)
  - Set up proper page-to-route mapping
  - Configured browser history for back/forward navigation via popstate events

- [x] **3.3 Page Turn Interactions** ✅
  - Implemented scroll-based page turning
  - Added throttle for scroll events (600ms)
  - Implemented keyboard navigation (left/right arrows)
  - Navigation arrow buttons integrated

- [x] **3.4 Bookmark System** ✅
  - Bookmark component integrated
  - Implemented bookmark overflow behavior
  - Made bookmarks clickable for navigation
  - Handle bookmark positioning and stacking
  - Bookmarks stay within book width

- [x] **3.5 Viewport Management** ✅
  - Locked screen height/width (no scrolling)
  - Enabled scrolling inside book content only
  - Handled overflow with custom scrollbar

---

## Phase 4: Page Implementation - Cover & About ✅ COMPLETE
**Goal**: Implement the book cover and "Who is he?" page with all content and styling.

### Tasks:
- [x] **4.1 Book Cover Page** ✅ MIGRATED
  - Create hard cover design (thick, fancy)
  - Add personal image at center
  - Add title: "A Persian Engineer" (Cormorant font)
  - Uses ImageWrapper component (migrated - standard img tag)
  - Set as root path (/)

- [x] **4.2 "Who is he?" Page - Content** ✅
  - Add grammatically correct bio content to dict.ts
  - Calculate years of experience dynamically (current year - 2018)
  - Add bold emphasis on "software engineer"
  - Structure content into sections

- [x] **4.3 "Who is he?" Page - Layout** ✅
  - Create "Who is he?" section with title
  - Add main bio paragraph
  - Create "Which parts can he help you with?" section
  - List all 5 help scenarios

- [x] **4.4 "Who is he?" Page - CV Link** ✅
  - Add CV link at bottom of page
  - Style link appropriately (Lapis Blue)
  - Ensure link opens in new tab

---

## Phase 5: Skills Page Implementation ✅ COMPLETE
**Goal**: Create interactive skills page with draggable logos organized by category.

### Tasks:
- [x] **5.1 Skills Data Structure** ✅
  - Populated skills.ts with all categories:
    - Languages (6 items)
    - Software engineering practices (13 items)
    - Automation and infrastructure (9 items)
    - Backend (15 items)
    - Frontend (12 items)
  - Each skill object: { title, image, documentLink }

- [x] **5.2 Logo Download Guide** ✅
  - Created comprehensive README guide
  - Listed all 55 logos needed
  - Provided download sources (Simple Icons, CDN)
  - Added quick download script examples

- [x] **5.3 Skills Page Layout** ✅
  - Created header explaining drag feature
  - Separated "Software engineering practices" at top (text only)
  - Grouped remaining skills by category
  - Styled with square containers, small border radius

- [x] **5.4 Draggable Logos** ✅
  - Implemented HTML5 drag functionality
  - Made each logo draggable
  - Implemented return-to-place on release
  - Added pointer cursor on hover
  - Made titles clickable (link to docs)

---

## Phase 6: Projects Page Implementation ✅ COMPLETE
**Goal**: Display open-source projects with descriptions and links.

### Tasks:
- [x] **6.1 Projects Data Structure** ✅
  - Already populated in projects.ts with all 5 projects:
    - Golang OTP dynamic modular monolith
    - Reactive-query
    - Reactvvm
    - Next clean boilerplate
    - Teaching Whiteboard

- [x] **6.2 Project Component** ✅
  - Created ProjectCard molecule component
  - Included: title, description, optional screenshot, links
  - Styled with Persian theme

- [x] **6.3 Projects Page Layout** ✅
  - Displayed projects in cards
  - Descriptions grammatically correct
  - Added proper spacing and typography
  - Made links clickable and styled

---

## Phase 7: Articles Page Implementation ✅ COMPLETE
**Goal**: Create dynamic articles page fetching from dev.to API with pagination.

### Tasks:
- [x] **7.1 Article Model Layer** ✅
  - Created API client for dev.to
  - Implemented fetch function using dev.to API
  - Handled API key from ARTICLE_API_KEY env variable
  - Added error handling

- [x] **7.2 Article ViewModel** ✅
  - Created useArticles custom hook
  - Implemented pagination (8 articles max per page)
  - Handled loading states
  - Handled error states
  - Called model layer functions

- [x] **7.3 Article View Components** ✅
  - Used ArticleCard molecule component
  - Used Skeleton loader component
  - Created error message UI
  - Implemented Pagination controls

- [x] **7.4 Articles Page Assembly** ✅
  - Assembled full articles page
  - Client-side fetching (React-based)
  - Made article rows clickable (open in new tab)
  - All states working (loading, error, success)

---

## Phase 8: GitHub Pages Deployment ⚠️ NEEDS UPDATE
**Goal**: Configure project for GitHub Pages deployment with automated workflows.

### Tasks:
- [ ] **8.1 React Build Configuration for GitHub Pages** ⚠️ NEEDS UPDATE
  - Configure React build for static export
  - Set up build script for production
  - Configure base path for GitHub Pages if needed
  - Ensure all assets are properly included in build

- [x] **8.2 Create GitHub Actions Workflow** ✅
  - Created .github/workflows/deploy.yml
  - Set up build job (needs update for React)
  - Set up deployment to GitHub Pages
  - Configured triggers (push to main)

- [x] **8.3 Environment Variables** ✅
  - Documented GitHub Secrets for ARTICLE_API_KEY
  - Created DEPLOYMENT.md guide
  - All env variables documented

- [x] **8.4 Deployment Documentation** ✅
  - Created comprehensive DEPLOYMENT.md
  - Step-by-step guide
  - Troubleshooting section
  - Ready to deploy

---

## Phase 9: Polish & Quality Assurance ✅ COMPLETE
**Goal**: Final testing, optimization, and quality checks across all devices.

### Tasks:
- [x] **9.1 Testing Documentation** ✅
  - Created comprehensive TESTING.md
  - Responsive testing checklist
  - Cross-browser testing guide
  - Success criteria defined

- [x] **9.2 Performance Guidelines** ✅
  - Image optimization guide
  - Bundle size monitoring
  - Core Web Vitals targets
  - Lighthouse audit steps

- [x] **9.3 QA Checklist** ✅
  - Content review checklist
  - Link verification steps
  - Data validation guide
  - Error handling tests

- [x] **9.4 Accessibility Guide** ✅
  - Keyboard navigation tests
  - Screen reader compatibility
  - Color contrast checks
  - ARIA label verification

- [x] **9.5 Final Documentation** ✅
  - Complete testing guide
  - Pre-deployment checklist
  - Post-deployment verification
  - PROJECT-COMPLETE.md created

---

## Phase Dependencies

```
Phase 1 (Foundation)
    ↓
Phase 2 (Design System)
    ↓
Phase 3 (Book Infrastructure)
    ↓
Phase 4, 5, 6, 7 (Pages - can be done in parallel)
    ↓
Phase 8 (Deployment)
    ↓
Phase 9 (Polish)
```

---

## Recommended Approach

1. **Complete Phase 1 & 2 together** - Establish foundation and design system
2. **Complete Phase 3** - Get book functionality working
3. **Implement pages one at a time** - Start with Phase 4 (Cover + About), then 5, 6, 7
4. **Deploy early (Phase 8)** - Set up deployment as soon as one page works
5. **Polish continuously (Phase 9)** - Do QA testing after each page implementation

---

## Notes
- Always refer to PRD for detailed specifications
- Maintain Persian ancient book aesthetic throughout
- Keep MVVM architecture consistent
- Test responsiveness after each component
- Commit frequently with clear messages

