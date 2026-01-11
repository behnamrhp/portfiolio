import { BookContainer } from '@/views/organisms';
import {
  CoverPage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ArticlesPage,
} from '@/views/pages';
import { ROUTES } from '@/input/constants';
import { isMobile } from '@/input/turnConfig';
import { useBookNavigation } from '@/viewmodels';

const pages = [
  ...(isMobile() ? [] : [
    {
      id: 'bg',
      title: 'Background',
      path: "/", // Unique path for background page (not meant to be directly routed)
      content: null,
    },
  ]),
  {
    id: 'cover',
    title: 'Cover',
    path: ROUTES.COVER,
    content: <CoverPage />,
  },
  {
    id: 'about',
    title: 'About',
    path: ROUTES.ABOUT,
    content: <AboutPage />,
  },
  {
    id: 'skills',
    title: 'Skills',
    path: ROUTES.SKILLS,
    content: <SkillsPage />,
  },
  {
    id: 'projects',
    title: 'Projects',
    path: ROUTES.PROJECTS,
    content: <ProjectsPage />,
  },
  {
    id: 'articles',
    title: 'Articles',
    path: ROUTES.ARTICLES,
    content: <ArticlesPage />,
  },
];


/**
 * BookLayout - Main book component with URL routing
 * 
 * Flow:
 * 1. useBookNavigation reads URL and determines initial page
 * 2. currentPage state is passed to BookContainer
 * 3. When user flips page, BookContainer calls onPageChange
 * 4. goToPage updates state and URL via window.history.pushState
 * 5. URL updates without page reload
 */
export function BookLayout() {
  const { currentPage, goToPage } = useBookNavigation({
    pages,
  });

  return (
    <BookContainer 
      pages={pages} 
      currentPage={currentPage}
      onPageChange={goToPage}
    />
  );
}

