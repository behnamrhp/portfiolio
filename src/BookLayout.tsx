import { BookContainer } from '@/views/organisms';
import {
  CoverPage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ArticlesPage,
} from '@/views/pages';
import { ROUTES } from '@/input/constants';

/**
 * BookLayout component that wraps all book pages
 * Defines all pages with their components for dynamic rendering
 */
export function BookLayout() {
  // Define all pages with their components
  // Pages are rendered dynamically based on current page index
  const pages = [
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

  return <BookContainer pages={pages} />;
}

