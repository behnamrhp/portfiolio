// Constants used throughout the application

export const CV_LINK = "https://example.com/path-to-cv.pdf"; // TODO: Update with actual CV link

export const ARTICLE_API_KEY = process.env.NEXT_PUBLIC_ARTICLE_API_KEY || "";

export const DEV_TO_USERNAME = "behnamrhp"; // Update with actual dev.to username

export const ARTICLES_PER_PAGE = 8;

// Page routes
export const ROUTES = {
  COVER: "/",
  ABOUT: "/about",
  SKILLS: "/skills",
  PROJECTS: "/projects",
  ARTICLES: "/articles",
} as const;

// Calculate years of experience dynamically
export const getYearsOfExperience = (): number => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

