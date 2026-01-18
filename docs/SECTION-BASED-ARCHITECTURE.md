# Section-Based Architecture - Fixed Multi-Page Sections

## Overview

The portfolio book uses a **section-based architecture** where each URL represents a logical content section (like "About" or "Skills") that spans a fixed number of physical pages. Each section has predefined pages with specific content.

## Key Concepts

### 1. Sections vs Physical Pages

**Section** = Logical content area with one URL path
- Example: "About" section at `/about`
- Contains all related content (bio, help areas, CV link)
- Has one bookmark
- Can span 1 to N physical pages

**Physical Page** = What the user sees in the book
- Fixed height based on book dimensions
- Scrollable content area
- Part of a parent section
- No individual URL

### 2. Fixed Section Structure

**Section-Based with Fixed Pages:**
```
Section: /about (2 pages)
├── Page 1: "Who is he?"
└── Page 2: "Which parts can he help you with?"

Section: /skills (3 pages)
├── Page 1: "Software Engineering Practices & Architectures"
├── Page 2: "Languages" + "Automation & Infrastructure"
└── Page 3: "Backend" + "Frontend"

Section: /projects (2 pages)
├── Page 1: Projects 1-2
└── Page 2: Projects 3-4

Section: /articles (1 page)
└── Page 1: Articles list with pagination
```

✅ Benefits:
- Clean URLs (`/about`, `/skills`, `/projects`, `/articles`)
- One bookmark per section
- Fixed, predictable structure
- Easy to maintain

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                       USER INTERACTION                      │
├─────────────────────────────────────────────────────────────┤
│  Navigate to URL: /about                                    │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    SECTION MANAGER                          │
├─────────────────────────────────────────────────────────────┤
│  1. Find section with path="/about"                         │
│  2. Measure section content height                          │
│  3. Calculate physical pages needed:                        │
│     - Content: 2400px                                       │
│     - Page height: 800px                                    │
│     - Result: 3 physical pages                              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   CONTENT PAGINATION                        │
├─────────────────────────────────────────────────────────────┤
│  Split content into 3 pages:                                │
│  ├── Page 1: 0-800px                                        │
│  ├── Page 2: 800-1600px                                     │
│  └── Page 3: 1600-2400px                                    │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      BOOK DISPLAY                           │
├─────────────────────────────────────────────────────────────┤
│  Show physical page with:                                   │
│  - Section content (current slice)                          │
│  - Navigation arrows                                        │
│  - Active bookmark (About)                                  │
│  - URL bar shows: /about                                    │
└─────────────────────────────────────────────────────────────┘
```

## Data Structure

### Section Interface

```typescript
interface Section {
  id: string;           // 'about', 'skills', 'projects', etc.
  title: string;        // 'About', 'Skills', 'Projects', etc.
  path: string;         // '/about', '/skills', '/projects', etc.
  component: ReactNode; // Full content component
  
  // Calculated dynamically:
  contentHeight?: number;     // Measured height in pixels
  physicalPages?: number;     // Number of pages needed
  startPage?: number;         // First physical page index
  endPage?: number;           // Last physical page index
}
```

### Physical Page Mapping

```typescript
interface PhysicalPage {
  pageNumber: number;        // Global page number (0-based)
  sectionId: string;         // Parent section ('about')
  sectionPageNumber: number; // Page within section (0-based)
  isFirstInSection: boolean;
  isLastInSection: boolean;
  contentSlice: {
    startY: number;          // px offset from section top
    endY: number;            // px offset from section top
  };
}
```

## Navigation Flows

### Flow 1: User Navigates to URL

```
1. User enters /about in browser or clicks bookmark
   ↓
2. Find section with path="/about"
   ↓
3. Navigate to section.startPage (first physical page)
   ↓
4. Render page content (slice 0-800px)
   ↓
5. URL stays as /about
   ↓
6. Bookmark "About" is active
```

### Flow 2: User Flips Page Within Section

```
1. User on /about page 1, clicks next arrow
   ↓
2. Check: Is next page still in About section?
   ↓ YES
3. Turn to physical page 2
   ↓
4. Render content slice 800-1600px
   ↓
5. URL STAYS as /about (no change!)
   ↓
6. Bookmark "About" stays active
```

### Flow 3: User Flips to New Section

```
1. User on /about page 3 (last page of About)
2. Clicks next arrow
   ↓
3. Check: Is next page in different section?
   ↓ YES - it's Skills section
4. Update URL: /about → /skills
   ↓
5. window.history.pushState({}, 'Skills', '/skills')
   ↓
6. Turn to physical page (Skills.startPage)
   ↓
7. Render Skills content slice 0-800px
   ↓
8. Update bookmark: About → Skills (active)
```

### Flow 4: Browser Back Button

```
1. User on /skills, clicks browser back
   ↓
2. Browser changes URL: /skills → /about
   ↓
3. popstate event fires
   ↓
4. Find section with path="/about"
   ↓
5. Navigate to section.startPage (first page of About)
   ↓
6. No pushState call (browser already changed URL)
```

## Content Pagination Algorithm

### Step 1: Measure Content

```typescript
function measureSectionContent(section: Section): number {
  // Render section content in hidden container
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.visibility = 'hidden';
  container.style.width = `${bookWidth}px`;
  
  // Render React component
  const root = createRoot(container);
  root.render(section.component);
  
  // Wait for render, then measure
  const height = container.scrollHeight;
  
  // Cleanup
  root.unmount();
  container.remove();
  
  return height;
}
```

### Step 2: Calculate Pages

```typescript
function calculatePhysicalPages(
  contentHeight: number,
  pageHeight: number
): number {
  const usableHeight = pageHeight - PADDING_TOP - PADDING_BOTTOM;
  return Math.ceil(contentHeight / usableHeight);
}
```

### Step 3: Create Page Map

```typescript
function createPageMap(sections: Section[]): PhysicalPage[] {
  const pages: PhysicalPage[] = [];
  let globalPageNumber = 0;
  
  sections.forEach(section => {
    section.startPage = globalPageNumber;
    
    for (let i = 0; i < section.physicalPages; i++) {
      pages.push({
        pageNumber: globalPageNumber,
        sectionId: section.id,
        sectionPageNumber: i,
        isFirstInSection: i === 0,
        isLastInSection: i === section.physicalPages - 1,
        contentSlice: {
          startY: i * pageHeight,
          endY: (i + 1) * pageHeight,
        },
      });
      globalPageNumber++;
    }
    
    section.endPage = globalPageNumber - 1;
  });
  
  return pages;
}
```

### Step 4: Render Physical Page

```typescript
function renderPhysicalPage(page: PhysicalPage) {
  const section = findSection(page.sectionId);
  
  return (
    <div 
      className="physical-page"
      style={{
        height: pageHeight,
        overflow: 'hidden',
      }}
    >
      <div
        className="content-window"
        style={{
          transform: `translateY(-${page.contentSlice.startY}px)`,
          height: section.contentHeight,
        }}
      >
        {section.component}
      </div>
    </div>
  );
}
```

## Implementation Checklist

### Phase 1: Data Structure
- [ ] Define Section interface
- [ ] Define PhysicalPage interface
- [ ] Convert current pages array to sections array
- [ ] Update types throughout codebase

### Phase 2: Content Measurement
- [ ] Create content measurement utility
- [ ] Handle async measurement (images, fonts)
- [ ] Cache measured heights
- [ ] Re-measure on window resize

### Phase 3: Page Calculation
- [ ] Implement page calculation algorithm
- [ ] Create global page map
- [ ] Track section boundaries
- [ ] Handle edge cases (empty sections, very short content)

### Phase 4: Navigation Logic
- [ ] Update URL routing to be section-based
- [ ] Implement "same section" vs "new section" detection
- [ ] Update history.pushState logic
- [ ] Update popstate handling

### Phase 5: Content Rendering
- [ ] Implement content slicing/windowing
- [ ] Handle smooth transitions between pages
- [ ] Optimize performance (virtualization if needed)
- [ ] Test with all content types

### Phase 6: Bookmark System
- [ ] Update to one bookmark per section
- [ ] Implement section active state
- [ ] Update bookmark click handlers
- [ ] Test bookmark navigation

### Phase 7: Testing
- [ ] Test each section with various content lengths
- [ ] Test navigation within sections
- [ ] Test navigation between sections
- [ ] Test browser back/forward
- [ ] Test URL direct navigation
- [ ] Test on different screen sizes

## Examples

### Example 1: Short Section (1 Page)

```
Section: Cover
Content Height: 600px
Page Height: 800px
Result: 1 physical page

Physical Pages:
├── Page 0: Cover (URL: /)

Behavior:
- Clicking next from Cover goes directly to About
- URL changes from / to /about
```

### Example 2: Medium Section (2 Pages)

```
Section: Skills
Content Height: 1400px
Page Height: 800px
Result: 2 physical pages

Physical Pages:
├── Page 5: Skills page 1 (URL: /skills)
└── Page 6: Skills page 2 (URL: /skills)

Behavior:
- Flipping from page 5 to 6: URL stays /skills
- Flipping from page 6 to 7: URL changes to /projects
```

### Example 3: Long Section (4 Pages)

```
Section: Projects
Content Height: 3000px
Page Height: 800px
Result: 4 physical pages

Physical Pages:
├── Page 7:  Projects page 1 (0-800px)    URL: /projects
├── Page 8:  Projects page 2 (800-1600px) URL: /projects
├── Page 9:  Projects page 3 (1600-2400px) URL: /projects
└── Page 10: Projects page 4 (2400-3000px) URL: /projects

Behavior:
- All 4 pages show URL: /projects
- Bookmark "Projects" active for all 4 pages
- Flipping within pages 7-10: No URL change
- Flipping from page 10 to 11: URL changes to /articles
```

## Benefits of This Architecture

### For Users
✅ Natural URLs that match mental model
✅ Bookmarks represent logical sections
✅ Content flows naturally without artificial breaks
✅ Browser history works intuitively

### For Developers
✅ No manual content splitting
✅ Automatic pagination
✅ Easy to add/remove content
✅ Responsive to screen size changes
✅ Maintainable and scalable

### For Content
✅ Write content without thinking about page breaks
✅ Add/remove content freely
✅ Different sections can be different lengths
✅ Content naturally flows to fill pages

## Migration from Current System

### Current System
- Each page has its own path
- Manual page breaks in content
- One bookmark per page
- URL changes on every page turn

### New System
- Each section has one path
- Automatic pagination of content
- One bookmark per section
- URL changes only on section change

### Migration Steps
1. Group current pages into logical sections
2. Remove artificial page breaks from content
3. Implement measurement and pagination
4. Update routing to be section-based
5. Update bookmarks to be section-based
6. Test thoroughly with all content

---

This architecture provides a more natural and maintainable approach to content management in the book-style portfolio.

