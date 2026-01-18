// Constants used throughout the application

export const CV_LINK = import.meta.env.VITE_CV_URL || ""; // TODO: Update with actual CV link

export const ARTICLE_API_KEY = import.meta.env.VITE_ARTICLE_API_KEY || "";

export const DEV_TO_USERNAME = "behnamrhp"; // Update with actual dev.to username

export const ARTICLES_PER_PAGE = 4;

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
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

