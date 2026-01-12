import type { Dictionary } from "./types";

// All content and copy for the portfolio
// This allows easy updates and future i18n support

export const dict: Dictionary = {
  cover: {
    title: "A Persian Engineer",
  },
  about: {
    title: "Who is he?",
    whoIsHe: {
      title: "Who is he?",
    },
    help: {
      title: "Which parts can he help you with?",
      items: [
        "If you have a team whose performance decreases or their development pace decreases, but you don't know why?",
        "If you have a product whose performance is low or your business has entered another level, but your product cannot handle more users.",
        "If you want to create a product but you care about the performance of your future product and want someone to help you design your product system, manage a team, and develop your product.",
        "If you want to leverage AI in your application.",
        "If your production product is getting into trouble but you cannot address the issue or it takes too much time to find the issue.",
      ],
    },
    cvLink: {
      text: "Download CV",
    },
  },
  skills: {
    title: "His Skills",
    dragHint:
      "You can drag each logo! This is his first library which he wrote after the first year of learning programming with vanilla JavaScript.",
  },
  projects: {
    title: "His Open Source Projects",
  },
  articles: {
    title: "Articles",
    loading: "Loading articles...",
    error:
      "We got an issue connecting to dev.to as our articles center. Please try again later.",
    views: "views",
  },
};

