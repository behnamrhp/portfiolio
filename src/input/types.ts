// Type definitions for all input data structures

export interface Dictionary {
  cover: {
    title: string;
  };
  about: {
    title: string;
    whoIsHe: {
      title: string;
    };
    help: {
      title: string;
      items: string[];
    };
    cvLink: {
      text: string;
    };
  };
  skills: {
    title: string;
    dragHint: string;
  };
  projects: {
    title: string;
  };
  articles: {
    title: string;
    loading: string;
    error: string;
    views: string;
  };
}

export interface Skill {
  title: string;
  image: string;
  documentLink: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skills {
  principles: string[]; // Software engineering principles (no logos)
  categories: SkillCategory[];
}

export interface ProjectLink {
  title: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  screenshot?: string; // Optional screenshot path
  links: ProjectLink[];
}

export interface Projects {
  list: Project[];
}

