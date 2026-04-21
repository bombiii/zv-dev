export interface Project {
  title: string;
  description: string;
  tags?: string[];
  url?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    title: "zv-dev",
    description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/bombiii/zv-dev",
  },
  {
    title: "project_2",
    description: "Lorem ipsum dolor sit amet",
    tags: [],
    url: "",
    repo: "",
  },
  {
    title: "project_3",
    description: "Lorem ipsum dolor sit amet",
    tags: [],
    url: "",
    repo: "",
  }
];
