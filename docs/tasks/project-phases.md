# Portfolio Project - Phases & Tasks Breakdown

## Overview
This document breaks down the Persian Ancient Book-themed portfolio website into manageable phases and tasks. Each phase represents a logical grouping of work that should be handled together.

---

## Phase 1: Project Foundation & Setup ✅ COMPLETE
**Goal**: Set up the Next.js project with all necessary configurations, dependencies, and core architecture.

### Tasks:
- [x] **1.1 Initialize Next.js Project** ✅
  - Create Next.js project with TypeScript
  - Configure for SSG (Static Site Generation)
  - Set up project folder structure following MVVM + Atomic Design

- [x] **1.2 Install Core Dependencies** ✅
  - Install and configure Tailwind CSS
  - Add turn.js library for book page turns
  - Install all-drag library for skills page
  - Set up any other required npm packages

- [x] **1.3 Configure Fonts** ✅
  - Download and add Cormorant font to assets
  - Download and add EB Garamond font to assets
  - Configure Next.js font loading (local fonts, no dynamic loading)

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
  - Image wrapper component (Next.js Image)
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

## Phase 3: Book Infrastructure & Navigation
**Goal**: Implement the core book functionality with page turning, routing, and bookmarks.

### Tasks:
- [ ] **3.1 Integrate turn.js**
  - Set up turn.js with Next.js
  - Configure book dimensions and responsiveness
  - Handle single vs double page modes

- [ ] **3.2 Implement Page Routing**
  - Create routing system where each page = URL path
  - Implement path changes without page refresh
  - Set up proper page-to-route mapping

- [ ] **3.3 Page Turn Interactions**
  - Implement scroll-based page turning
  - Add throttle/debounce for scroll events
  - Implement keyboard navigation (left/right arrows)
  - Create navigation arrow buttons (flesh style)

- [ ] **3.4 Bookmark System**
  - Create bookmark component for each page
  - Implement bookmark overflow behavior
  - Make bookmarks clickable for navigation
  - Handle bookmark positioning and stacking
  - Ensure bookmarks stay within book width

- [ ] **3.5 Viewport Management**
  - Lock screen height/width (no scrolling)
  - Enable scrolling inside book content only
  - Handle overflow properly

---

## Phase 4: Page Implementation - Cover & About
**Goal**: Implement the book cover and "Who is he?" page with all content and styling.

### Tasks:
- [ ] **4.1 Book Cover Page**
  - Create hard cover design (thick, fancy)
  - Add personal image at center
  - Add title: "A Persian Engineer" (Cormorant font)
  - Optimize image with Next.js Image component
  - Set as root path (/)

- [ ] **4.2 "Who is he?" Page - Content**
  - Add grammatically correct bio content to dict.ts
  - Calculate years of experience dynamically (current year - 2018)
  - Add bold emphasis on "software engineer"
  - Structure content into sections

- [ ] **4.3 "Who is he?" Page - Layout**
  - Create "Who is he?" section with title
  - Add main bio paragraph
  - Create "Which parts can he help you with?" section
  - List all 4 help scenarios

- [ ] **4.4 "Who is he?" Page - CV Link**
  - Add CV link at bottom of page
  - Style link appropriately (Lapis Blue)
  - Ensure link opens in new tab

---

## Phase 5: Skills Page Implementation
**Goal**: Create interactive skills page with draggable logos organized by category.

### Tasks:
- [ ] **5.1 Skills Data Structure**
  - Populate skills.ts with all categories:
    - Languages (6 items)
    - Software engineering practices (13 items)
    - Automation and infrastructure (9 items)
    - Backend (15 items)
    - Frontend (17 items)
  - Each skill object: { title, image, documentLink }

- [ ] **5.2 Find & Download Logos**
  - Search and download logos for all technologies
  - Optimize images for web
  - Store in assets folder
  - Skip logos for "Software engineering practices" category

- [ ] **5.3 Skills Page Layout**
  - Create header explaining drag feature
  - Separate "Software engineering practices" at top (text only)
  - Group remaining skills by category
  - Style with square containers, small border radius

- [ ] **5.4 Implement Draggable Logos**
  - Integrate all-drag library
  - Make each logo draggable
  - Implement return-to-place on release
  - Add pointer cursor on hover
  - Make titles clickable (link to docs)

---

## Phase 6: Projects Page Implementation
**Goal**: Display open-source projects with descriptions and links.

### Tasks:
- [ ] **6.1 Projects Data Structure**
  - Populate projects.ts with all 5 projects:
    - Golang OTP dynamic modular monolith
    - Reactive-query
    - Reactvvm
    - Next clean boilerplate
    - Teaching Whiteboard

- [ ] **6.2 Project Component**
  - Create project row component
  - Include: title, description, optional screenshot, links
  - Style appropriately with Persian theme

- [ ] **6.3 Projects Page Layout**
  - Display projects in rows
  - Ensure descriptions are grammatically correct
  - Add proper spacing and typography
  - Make links clickable and styled

---

## Phase 7: Articles Page Implementation
**Goal**: Create dynamic articles page fetching from dev.to API with pagination.

### Tasks:
- [ ] **7.1 Article Model Layer**
  - Create API client for dev.to
  - Implement fetch function using dev.to API
  - Handle API key from ARTICLE_API_KEY env variable
  - Add error handling

- [ ] **7.2 Article ViewModel**
  - Create custom hook for articles logic
  - Implement pagination (8 articles max per page)
  - Handle loading states
  - Handle error states
  - Call model layer functions

- [ ] **7.3 Article View Components**
  - Create article row component (title, image, view count)
  - Create skeleton loader component
  - Create error message component
  - Implement pagination controls

- [ ] **7.4 Articles Page Assembly**
  - Assemble full articles page
  - Client-side fetching (not SSG)
  - Make article rows clickable (open in new tab)
  - Test loading, error, and success states

---

## Phase 8: GitHub Pages Deployment
**Goal**: Configure project for GitHub Pages deployment with automated workflows.

### Tasks:
- [ ] **8.1 Next.js Configuration for GitHub Pages**
  - Configure next.config.js for static export
  - Set up proper base path (if needed)
  - Configure asset prefix for GitHub Pages

- [ ] **8.2 Create GitHub Actions Workflow**
  - Create .github/workflows/deploy.yml
  - Set up build job
  - Set up deployment to GitHub Pages
  - Configure triggers (push to main)

- [ ] **8.3 Environment Variables**
  - Set up GitHub Secrets for ARTICLE_API_KEY
  - Ensure all env variables are properly configured

- [ ] **8.4 Test Deployment**
  - Test build process
  - Verify static export works correctly
  - Test deployed site functionality
  - Verify all routes work with GitHub Pages

---

## Phase 9: Polish & Quality Assurance
**Goal**: Final testing, optimization, and quality checks across all devices.

### Tasks:
- [ ] **9.1 Responsive Testing**
  - Test on mobile devices
  - Test on tablets
  - Test on laptop screens
  - Test on large desktop screens
  - Verify book covers 90%+ on all sizes

- [ ] **9.2 Performance Optimization**
  - Optimize all images
  - Check bundle size
  - Verify lazy loading
  - Test page turn performance
  - Check Core Web Vitals

- [ ] **9.3 Content Review**
  - Review all grammar and copy
  - Verify all links work
  - Check years of experience calculation
  - Verify CV link is correct
  - Test article fetching

- [ ] **9.4 Cross-browser Testing**
  - Test in Chrome
  - Test in Firefox
  - Test in Safari
  - Test in Edge
  - Fix any browser-specific issues

- [ ] **9.5 Accessibility Check**
  - Check keyboard navigation
  - Verify screen reader compatibility
  - Check color contrast ratios
  - Add proper ARIA labels

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

