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

## Phase 3: Book Infrastructure & Navigation ⚠️ NEEDS MAJOR UPDATE
**Goal**: Implement the core book functionality with page turning, section-based routing, content pagination, and bookmarks.

### Critical Architecture Change:
**Section-Based Routing vs Physical Page Routing**
- Each URL path represents a **section** (not a physical page)
- A section can span multiple physical pages if content overflows
- URL updates only when navigating between sections
- Physical page navigation within a section does NOT change URL

### Tasks:
- [x] **3.1 Custom Page-Turn Animation System** ✅
  - Created modern React-based solution (replaced turn.js)
  - Implemented CSS 3D animations
  - Added direction tracking and animation states

- [ ] **3.2 Implement Section-Based Routing** ⚠️ NEEDS MAJOR REFACTOR
  - **Current**: Each physical page has its own URL path
  - **Required**: Each section has one URL path, spanning multiple physical pages
  - Implement URL management using window.history.pushState()
  - URL represents section (e.g., `/about`), not individual page
  - Physical page navigation within section should NOT update URL
  - URL changes only when entering/exiting a section
  - Track: currentSection, currentPhysicalPage, totalPagesInSection
  - Browser history should work with section context

- [ ] **3.3 Content Pagination System** ⚠️ NEW REQUIREMENT
  - Measure section content height
  - Calculate how many physical pages needed per section
  - Split content across multiple pages when it overflows page height
  - Each physical page is scrollable up to book height
  - Overflow content automatically continues on next physical page
  - Maintain section context across pages
  - Example: "About" section content = 2500px height
    - Book page height = 800px
    - Result: About section spans 4 physical pages
    - All 4 pages have URL = `/about`

- [x] **3.4 Page Turn Interactions** ✅
  - Implemented scroll-based page turning (may need adjustment for sections)
  - Added throttle for scroll events (600ms)
  - Implemented keyboard navigation (left/right arrows)
  - Navigation arrow buttons integrated
  - **Note**: May need to distinguish between:
    - Page turn within same section (no URL change)
    - Page turn to new section (URL changes)

- [ ] **3.5 Bookmark System** ⚠️ NEEDS UPDATE
  - **Current**: One bookmark per physical page
  - **Required**: One bookmark per section
  - Bookmark component for each section (not each page)
  - Clicking bookmark navigates to first page of that section
  - Bookmark remains active for all pages within section
  - Implemented bookmark overflow behavior
  - Made bookmarks clickable for navigation
  - Handle bookmark positioning and stacking
  - Bookmarks stay within book width

- [x] **3.6 Viewport Management** ✅
  - Locked screen height/width (no scrolling)
  - Enabled scrolling inside book content only
  - Handled overflow with custom scrollbar

---

## Phase 3.5: Content Pagination & Section Management ⚠️ NEW PHASE
**Goal**: Implement the content pagination system where sections automatically span multiple physical pages based on content height.

### Architecture Overview:
```
Section (URL: /about)
├── Physical Page 1 (scrollable, max height: 800px)
├── Physical Page 2 (overflow content from page 1)
├── Physical Page 3 (overflow content from page 2)
└── Physical Page 4 (remaining content)

All pages show URL: /about
```

### Tasks:
- [ ] **3.5.1 Section Model & Data Structure** ⚠️ REQUIRED
  - Define Section interface:
    ```typescript
    interface Section {
      id: string;           // 'about', 'skills', etc.
      title: string;        // 'About', 'Skills', etc.
      path: string;         // '/about', '/skills', etc.
      component: ReactNode; // Content component
      // Content pagination will be calculated dynamically
    }
    ```
  - Update pages array to be sections array
  - Each section renders its full content
  - Physical pages are calculated from rendered height

- [ ] **3.5.2 Content Height Measurement** ⚠️ REQUIRED
  - Create utility to measure rendered content height
  - Use ResizeObserver or useLayoutEffect
  - Measure section content in hidden/offscreen container
  - Get accurate height before pagination

- [ ] **3.5.3 Page Calculation Algorithm** ⚠️ REQUIRED
  - Calculate physical pages needed per section:
    ```typescript
    const pageHeight = bookHeight - padding;
    const totalPages = Math.ceil(contentHeight / pageHeight);
    ```
  - Track page ranges for content slicing
  - Handle edge cases (empty sections, very short content)

- [ ] **3.5.4 Content Slicing & Rendering** ⚠️ REQUIRED
  - Render full content offscreen to measure
  - Slice content into page-sized chunks
  - Handle different content types:
    - Text paragraphs (split at natural breaks)
    - Lists (keep items together when possible)
    - Images (avoid splitting)
    - Cards/components (keep atomic)
  - Consider using CSS column layout or manual slicing

- [ ] **3.5.5 Section Context Management** ⚠️ REQUIRED
  - Create useSectionContext hook
  - Track:
    - currentSection: Section object
    - currentPhysicalPage: number (within section)
    - totalPagesInSection: number
    - isFirstPageOfSection: boolean
    - isLastPageOfSection: boolean
  - Update context on page turn
  - Determine if page turn enters new section

- [ ] **3.5.6 URL Update Logic** ⚠️ REQUIRED
  - Update URL only on section change:
    ```typescript
    // Page turn within section
    if (newPage.sectionId === currentPage.sectionId) {
      // Don't update URL, just turn page
      turnToPage(newPage);
    } else {
      // Entering new section, update URL
      window.history.pushState(...);
      turnToPage(newPage);
    }
    ```
  - Handle browser back/forward with section context
  - Navigate to first page of section from URL

- [ ] **3.5.7 Bookmark Integration** ⚠️ REQUIRED
  - One bookmark per section (not per physical page)
  - Bookmark shows section title
  - Clicking bookmark navigates to section's first page
  - Bookmark active state for all pages in section
  - Update bookmark positioning logic

- [ ] **3.5.8 Navigation Button Behavior** ⚠️ REQUIRED
  - Next/Previous buttons work across sections
  - Moving from last page of section A to first page of section B:
    - Updates URL from `/section-a` to `/section-b`
    - Visual page turn animation
    - Updates bookmark active state
  - Within section navigation:
    - No URL change
    - Page turn animation
    - Same bookmark remains active

### Implementation Strategy:
1. Start with a simple section (About) as proof of concept
2. Implement content measurement and pagination
3. Test with varying content lengths
4. Extend to all sections
5. Optimize performance (memoization, virtualization if needed)

### Performance Considerations:
- Measure content height once, cache result
- Re-measure only on window resize or content change
- Use React.memo for page components
- Consider lazy loading for multi-page sections
- Optimize re-renders during page turns

---

## Phase 4: Section Implementation - Cover & About ⚠️ NEEDS UPDATE
**Goal**: Implement the book cover and "About" section with all content and styling. About section may span multiple physical pages based on content length.

### Tasks:
- [x] **4.1 Book Cover Page** ✅ MIGRATED
  - Create hard cover design (thick, fancy)
  - Add personal image at center
  - Add title: "A Persian Engineer" (Cormorant font)
  - Uses ImageWrapper component (migrated - standard img tag)
  - Set as root path (/)

- [ ] **4.2 "About" Section - Content** ⚠️ NEEDS UPDATE
  - Add grammatically correct bio content to dict.ts
  - Calculate years of experience dynamically (current year - 2018)
  - Add bold emphasis on "software engineer"
  - Structure content into subsections
  - **Note**: Content may span 2-3 physical pages depending on length
  - All pages in section show URL: `/about`

- [ ] **4.3 "About" Section - Layout** ⚠️ NEEDS UPDATE
  - Create "Who is he?" subsection with title
  - Add main bio paragraph
  - Create "Which parts can he help you with?" subsection
  - List all 5 help scenarios
  - **Note**: If content exceeds page height, it continues on next physical page
  - Implement content pagination for this section

- [ ] **4.4 "About" Section - CV Link** ⚠️ NEEDS UPDATE
  - Add CV link at bottom of section (may be on page 2 or 3)
  - Style link appropriately (Lapis Blue)
  - Ensure link opens in new tab
  - Link appears on last physical page of About section

---

## Phase 5: Skills Section Implementation ⚠️ NEEDS UPDATE
**Goal**: Create interactive skills section with draggable logos organized by category. Section may span multiple physical pages based on number of skills.

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

- [ ] **5.3 Skills Section Layout** ⚠️ NEEDS UPDATE
  - Created header explaining drag feature
  - Separated "Software engineering practices" at top (text only)
  - Grouped remaining skills by category
  - Styled with square containers, small border radius
  - **Note**: With 55+ skills, section likely spans 2-3 physical pages
  - URL remains `/skills` for all pages
  - Implement content pagination to split categories across pages

- [ ] **5.4 Draggable Logos** ⚠️ NEEDS UPDATE
  - Implemented HTML5 drag functionality
  - Made each logo draggable
  - Implemented return-to-place on release
  - Added pointer cursor on hover
  - Made titles clickable (link to docs)
  - **Note**: Dragging should work across physical pages within Skills section
  - Consider drag constraints within section boundaries

---

## Phase 6: Projects Section Implementation ⚠️ NEEDS UPDATE
**Goal**: Display open-source projects with descriptions and links. Section automatically spans multiple pages if projects list is long.

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

- [ ] **6.3 Projects Section Layout** ⚠️ NEEDS UPDATE
  - Displayed projects in cards
  - Descriptions grammatically correct
  - Added proper spacing and typography
  - Made links clickable and styled
  - **Note**: 5 projects with descriptions may span 2-3 physical pages
  - URL remains `/projects` for all pages in section
  - Implement content pagination to split projects across pages
  - Keep each project card atomic (don't split mid-project)

---

## Phase 7: Articles Section Implementation ⚠️ NEEDS UPDATE
**Goal**: Create dynamic articles section fetching from dev.to API. Section spans multiple pages based on article pagination (8 per view).

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

- [ ] **7.4 Articles Section Assembly** ⚠️ NEEDS UPDATE
  - Assembled full articles section
  - Client-side fetching (React-based)
  - Made article rows clickable (open in new tab)
  - All states working (loading, error, success)
  - **Note**: 8 articles per pagination page
  - Each pagination page may span 1-2 physical pages depending on card heights
  - URL remains `/articles` for all physical pages
  - Pagination controls visible on all pages within section
  - Clicking pagination should stay within `/articles` URL

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

