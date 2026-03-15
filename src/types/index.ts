export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export type ProjectCategory = "applied-ai" | "fundamentals" | "full-stack";

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  link?: string;
  github?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Hobby {
  title: string;
  description: string;
  icon: string;
}

export interface Social {
  label: string;
  href: string;
  icon: string;
}
