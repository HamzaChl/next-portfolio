enum ProjectCategory {
  Dev = "Dev",
  Web = "Web",
  Design = "Design",
  UIUX = "UI/UX",
  Autre = "Autre"
}

export interface Project {
  id: number;
  title: string;
  year: number;
  image: string;
  hoverImage: string;
  category: ProjectCategory;
  projectImages: string[];
}
