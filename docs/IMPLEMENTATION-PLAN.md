# Implementation Plan - Section-Based Architecture

## Structure Overview

### Cover (Path: `/`)
- **Pages:** 1
- **Content:** Cover image and title

### About Section (Path: `/about`)
- **Pages:** 2
- **Page 1:** "Who is he?" content
- **Page 2:** "Which parts can he help you with?" content

### Skills Section (Path: `/skills`)
- **Pages:** 3
- **Page 1:** Software Engineering Practices & Architectures
- **Page 2:** Languages + Automation & Infrastructure (two components, one page)
- **Page 3:** Backend + Frontend (two components, one page)

### Projects Section (Path: `/projects`)
- **Pages:** 2
- **Page 1:** Projects 1-2
- **Page 2:** Projects 3-4 (or 3-5 if 5 projects total)

### Articles Section (Path: `/articles`)
- **Pages:** 1
- **Content:** Articles list with pagination controls

## Total Physical Pages
- Cover: 1 page (index 0)
- About: 2 pages (index 1-2)
- Skills: 3 pages (index 3-5)
- Projects: 2 pages (index 6-7)
- Articles: 1 page (index 8)
- **Total: 9 physical pages**

## Data Structure

```typescript
interface Section {
  id: string;           // 'about', 'skills', etc.
  title: string;        // 'About', 'Skills', etc.
  path: string;         // '/about', '/skills', etc.
  pages: SectionPage[]; // Array of pages in this section
}

interface SectionPage {
  id: string;              // 'about-who-is-he', 'skills-languages', etc.
  title: string;           // 'Who is he?', 'Languages', etc.
  component: ReactNode;    // Page content component
  globalPageIndex: number; // Index in global page array
}

// Example:
const aboutSection: Section = {
  id: 'about',
  title: 'About',
  path: '/about',
  pages: [
    {
      id: 'about-who-is-he',
      title: 'Who is he?',
      component: <WhoIsHePage />,
      globalPageIndex: 1,
    },
    {
      id: 'about-help',
      title: 'Which parts can he help you with?',
      component: <HelpAreasPage />,
      globalPageIndex: 2,
    },
  ],
};
```

## Navigation Logic

### URL to Page Mapping

```typescript
// When user visits /about
1. Find section with path="/about"
2. Navigate to first page of section (globalPageIndex = 1)
3. Display page content

// When user flips page within /about section
1. Current page: globalPageIndex = 1 (About, page 1)
2. Next page: globalPageIndex = 2 (About, page 2)
3. Still in same section → Don't update URL
4. Display page 2 content

// When user flips from /about to /skills
1. Current page: globalPageIndex = 2 (About, last page)
2. Next page: globalPageIndex = 3 (Skills, first page)
3. Different section → Update URL to /skills
4. Display Skills page 1 content
```

### Page Turn Logic

```typescript
function handlePageTurn(currentPageIndex: number, direction: 'next' | 'prev') {
  const newPageIndex = direction === 'next' 
    ? currentPageIndex + 1 
    : currentPageIndex - 1;
  
  const currentSection = getSectionByPageIndex(currentPageIndex);
  const newSection = getSectionByPageIndex(newPageIndex);
  
  if (currentSection.id !== newSection.id) {
    // Entering new section - update URL
    window.history.pushState(
      { section: newSection.id, page: newPageIndex },
      newSection.title,
      newSection.path
    );
  }
  
  // Flip to new page (React PageFlip method)
  pageFlip.turnToPage(newPageIndex);
}
```

## Implementation Steps

### Step 1: Update Data Structure ✅ TODO
**File:** `src/BookLayout.tsx`

```typescript
const sections = [
  {
    id: 'cover',
    title: 'Cover',
    path: '/',
    pages: [
      {
        id: 'cover',
        title: 'Cover',
        component: <CoverPage />,
      },
    ],
  },
  {
    id: 'about',
    title: 'About',
    path: '/about',
    pages: [
      {
        id: 'about-who',
        title: 'Who is he?',
        component: <AboutWhoPage />,
      },
      {
        id: 'about-help',
        title: 'Help Areas',
        component: <AboutHelpPage />,
      },
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    path: '/skills',
    pages: [
      {
        id: 'skills-practices',
        title: 'Practices',
        component: <SkillsPracticesPage />,
      },
      {
        id: 'skills-languages',
        title: 'Languages',
        component: <SkillsLanguagesPage />, // Contains Languages + Automation
      },
      {
        id: 'skills-stack',
        title: 'Stack',
        component: <SkillsStackPage />, // Contains Backend + Frontend
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    path: '/projects',
    pages: [
      {
        id: 'projects-1',
        title: 'Projects 1-2',
        component: <ProjectsPage projects={[0, 1]} />,
      },
      {
        id: 'projects-2',
        title: 'Projects 3-4',
        component: <ProjectsPage projects={[2, 3]} />,
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles',
    path: '/articles',
    pages: [
      {
        id: 'articles',
        title: 'Articles',
        component: <ArticlesPage />,
      },
    ],
  },
];
```

### Step 2: Create Helper Functions ✅ TODO
**File:** `viewmodels/useSectionNavigation.ts` (new)

```typescript
export function useSectionNavigation(sections: Section[]) {
  // Flatten sections into page array with global indices
  const pages = useMemo(() => {
    let globalIndex = 0;
    return sections.flatMap(section =>
      section.pages.map(page => ({
        ...page,
        sectionId: section.id,
        sectionTitle: section.title,
        sectionPath: section.path,
        globalPageIndex: globalIndex++,
      }))
    );
  }, [sections]);
  
  // Get section by page index
  const getSectionByPageIndex = useCallback((pageIndex: number) => {
    const page = pages[pageIndex];
    return sections.find(s => s.id === page.sectionId);
  }, [pages, sections]);
  
  // Get page index by URL path
  const getPageIndexByPath = useCallback((path: string) => {
    const section = sections.find(s => s.path === path);
    if (!section) return 0;
    // Return first page of section
    return pages.findIndex(p => p.sectionId === section.id);
  }, [sections, pages]);
  
  return {
    pages,
    sections,
    getSectionByPageIndex,
    getPageIndexByPath,
  };
}
```

### Step 3: Update BookLayout ✅ TODO
**File:** `src/BookLayout.tsx`

```typescript
export function BookLayout() {
  const { pages, getSectionByPageIndex, getPageIndexByPath } = useSectionNavigation(sections);
  
  // Get initial page from URL
  const initialPage = getPageIndexByPath(window.location.pathname);
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  // Handle page change
  const handlePageChange = (newPageIndex: number) => {
    const currentSection = getSectionByPageIndex(currentPage);
    const newSection = getSectionByPageIndex(newPageIndex);
    
    setCurrentPage(newPageIndex);
    
    // Update URL only if section changed
    if (currentSection.id !== newSection.id) {
      window.history.pushState(
        { page: newPageIndex },
        newSection.title,
        newSection.path
      );
    }
  };
  
  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const pageIndex = getPageIndexByPath(window.location.pathname);
      setCurrentPage(pageIndex);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getPageIndexByPath]);
  
  return (
    <BookContainer
      pages={pages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}
```

### Step 4: Split About Page ✅ TODO
**Current:** `views/pages/AboutPage/AboutPage.tsx`
**New:** Split into two components:
- `views/pages/AboutPage/AboutWhoPage.tsx` - "Who is he?" content
- `views/pages/AboutPage/AboutHelpPage.tsx` - "Help areas" content

### Step 5: Split Skills Page ✅ TODO
**Current:** `views/pages/SkillsPage/SkillsPage.tsx`
**New:** Split into three components:
- `views/pages/SkillsPage/SkillsPracticesPage.tsx` - Practices list
- `views/pages/SkillsPage/SkillsLanguagesPage.tsx` - Languages + Automation (two sections)
- `views/pages/SkillsPage/SkillsStackPage.tsx` - Backend + Frontend (two sections)

### Step 6: Split Projects Page ✅ TODO
**Current:** `views/pages/ProjectsPage/ProjectsPage.tsx`
**Update:** Accept `projects` prop to show specific subset
- Pass projects=[0,1] for page 1
- Pass projects=[2,3] for page 2

### Step 7: Update Bookmarks ✅ TODO
**Current:** One bookmark per page
**New:** One bookmark per section
- Show section title on bookmark
- Click navigates to first page of section
- Active state for all pages in section

### Step 8: Test Navigation ✅ TODO
- Test URL updates between sections
- Test URL stays same within sections
- Test browser back/forward
- Test bookmarks
- Test keyboard navigation

## File Structure

```
src/
├── BookLayout.tsx (updated)
├── viewmodels/
│   └── useSectionNavigation.ts (new)
└── views/
    └── pages/
        ├── AboutPage/
        │   ├── AboutWhoPage.tsx (new)
        │   └── AboutHelpPage.tsx (new)
        ├── SkillsPage/
        │   ├── SkillsPracticesPage.tsx (new)
        │   ├── SkillsLanguagesPage.tsx (new)
        │   └── SkillsStackPage.tsx (new)
        └── ProjectsPage/
            └── ProjectsPage.tsx (updated - accept projects prop)
```

## Testing Checklist

- [ ] Cover (/) shows correctly
- [ ] /about loads to first About page
- [ ] Flipping within About keeps URL as /about
- [ ] Flipping from About to Skills changes URL to /skills
- [ ] /skills loads to first Skills page
- [ ] All 3 Skills pages show URL /skills
- [ ] /projects loads correctly
- [ ] Both Projects pages show URL /projects
- [ ] /articles loads correctly
- [ ] Browser back button works
- [ ] Browser forward button works
- [ ] Bookmarks show one per section
- [ ] Clicking bookmark navigates to section's first page
- [ ] Keyboard arrows work across sections

## Timeline

1. **Phase 1:** Data structure & navigation logic (2-3 hours)
2. **Phase 2:** Split page components (2-3 hours)
3. **Phase 3:** Update bookmarks (1 hour)
4. **Phase 4:** Testing & debugging (2 hours)

**Total Estimated Time:** 7-9 hours

