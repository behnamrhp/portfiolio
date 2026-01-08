import type { Dictionary } from "./types";
import { getYearsOfExperience } from "./constants";

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
      content: `Behnam Rahimpour, a Persian musician with national awards in classical music, who in his early 20s, through his military service, turned into a software engineer. Now he has over ${getYearsOfExperience()} years of experience in building software that helps companies and teams in defining business requirements, technical and system design, development, tests, maintenance, observability, and infrastructure of software. He has experience in developing and leading several international agile-based cross-functional teams during his career in both frontend and backend parts. He also has many stories about his challenges with team management in several agile-based atmospheres across different industries. That's why he has confidence in solving team management problems and designing teams and development processes based on each business challenge, emphasizing leveraging the ownership of team members rather than just theoretical agile methodologies. His main philosophy about success in software teams is having ownership by defining automated learning loops and leveraging AI to automate repetitive processes and achieve better quality.`,
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
      "You can drag each logo! This is my first library which I wrote after the first year of learning programming with vanilla JavaScript.",
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

