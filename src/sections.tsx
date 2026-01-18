import {
  CoverPage,
  AboutWhoPage,
  AboutHelpPage,
  SkillsPracticesPage,
  SkillsLanguagesPage,
  SkillsStackPage,
  ProjectsPage,
  LazyArticlesPage,
} from '@/views/pages';
import { ROUTES } from '@/input/constants';
import { isMobile } from '@/input/turnConfig';

/**
 * Section definition
 * Each section has a path and multiple physical pages
 */
interface SectionPage {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface Section {
  id: string;
  title: string;
  path: string;
  pages: SectionPage[];
}

/**
 * Define all book sections with their pages
 */
export const sections: Section[] = [
  // Background page (desktop only, not a real section)
  ...(isMobile() ? [] : [
    {
      id: 'bg',
      title: 'Background',
      path: '/',
      pages: [
        {
          id: 'bg',
          title: 'Background',
          content: null,
        },
      ],
    },
  ]),
  
  // Cover section
  {
    id: 'cover',
    title: 'Cover',
    path: ROUTES.COVER,
    pages: [
      {
        id: 'cover',
        title: 'Cover',
        content: <CoverPage />,
      },
    ],
  },
  
  // About section - 2 pages
  {
    id: 'about',
    title: 'About',
    path: ROUTES.ABOUT,
    pages: [
      {
        id: 'about-who',
        title: 'Who is he?',
        content: <AboutWhoPage />,
      },
      {
        id: 'about-help',
        title: 'Help Areas',
        content: <AboutHelpPage />,
      },
    ],
  },
  
  // Skills section - 3 pages
  {
    id: 'skills',
    title: 'Skills',
    path: ROUTES.SKILLS,
    pages: [
      {
        id: 'skills-practices',
        title: 'Practices',
        content: <SkillsPracticesPage />,
      },
      {
        id: 'skills-languages',
        title: 'Languages & Automation',
        content: <SkillsLanguagesPage />,
      },
      {
        id: 'skills-stack',
        title: 'Backend & Frontend',
        content: <SkillsStackPage />,
      },
    ],
  },
  
  // Projects section - 2 pages
  {
    id: 'projects',
    title: 'Projects',
    path: ROUTES.PROJECTS,
    pages: [
      {
        id: 'projects-1',
        title: 'Projects 1-2',
        content: <ProjectsPage startIndex={0} count={2} />,
      },
      {
        id: 'projects-2',
        title: 'Projects 3-5',
        content: <ProjectsPage startIndex={2} count={3} />,
      },
    ],
  },
  
  // Articles section - 1 page
  {
    id: 'articles',
    title: 'Articles',
    path: ROUTES.ARTICLES,
    pages: [
      {
        id: 'articles',
        title: 'Articles',
        content: <LazyArticlesPage />,
      },
    ],
  },
];

/**
 * Flatten sections into a page array with section metadata
 * Each page knows which section it belongs to
 */
export interface FlatPage {
  id: string;
  title: string;
  content: React.ReactNode;
  sectionId: string;
  sectionTitle: string;
  sectionPath: string;
  globalIndex: number;
  isFirstPageOfSection: boolean; // New: indicates if this is the first page of its section
  sectionPageIndex: number; // New: page index within its section (0-based)
}

export function flattenSections(sections: Section[]): FlatPage[] {
  const flatPages: FlatPage[] = [];
  let globalIndex = 0;
  
  sections.forEach(section => {
    section.pages.forEach((page, pageIndex) => {
      flatPages.push({
        ...page,
        sectionId: section.id,
        sectionTitle: section.title,
        sectionPath: section.path,
        globalIndex: globalIndex++,
        isFirstPageOfSection: pageIndex === 0,
        sectionPageIndex: pageIndex,
      });
    });
  });
  
  return flatPages;
}

/**
 * Get section by page index
 */
export function getSectionByPageIndex(flatPages: FlatPage[], pageIndex: number): Section | null {
  const page = flatPages[pageIndex];
  if (!page) return null;
  
  return sections.find(s => s.id === page.sectionId) || null;
}

/**
 * Get first page index of a section by path
 */
export function getFirstPageIndexByPath(flatPages: FlatPage[], path: string): number {
  const pageIndex = flatPages.findIndex(p => p.sectionPath === path);
  return pageIndex >= 0 ? pageIndex : 0;
}

