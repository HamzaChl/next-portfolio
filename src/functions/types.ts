export enum ProjectCategory {
  Dev = "Dev",
  Web = "Web",
  Design = "Design",
  UIUX = "UI/UX",
  Autre = "Autre",
  FullStack = "Full Stack"
}

export interface Project {
  id: number;
  title: string;
  year: number;
  image: string;
  hoverImage: string;
  categories: ProjectCategory[] | string[];  // ← Ici, c'est un tableau
  projectImages?: string[];
}
