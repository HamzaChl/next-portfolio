import styles from "@/styles/Project.module.css";

interface Project {
  id: number;
  title: string;
  year: number;
  image: string;
  hoverImage: string;
  category: string; // Nouvelle propriété pour le label
}

const projects: Project[] = [
  {
    id: 1,
    title: "EventGather",
    year: 2023,
    image: "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/01.png",
    hoverImage:
      "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/01hover.png",
    category: "Design",
  },
  {
    id: 2,
    title: "Freezmix",
    year: 2023,
    image: "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/02.png",
    hoverImage:
      "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/02hover.png",
    category: "Design",
  },
  {
    id: 3,
    title: "Projet Gamma",
    year: 2023,
    image: "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/01.png",
    hoverImage:
      "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/01hover.png",
    category: "UI/UX",
  },
];

const ProjectGrid = () => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          
          
          <div
            className={styles.project}
            style={
              {
                "--image": `url(${project.image})`,
                "--hover": `url(${project.hoverImage})`,
              } as React.CSSProperties
            }
          ><span className={styles.label}>{project.category}</span></div>
          <h3 className={styles.title}>
            {project.title} ━ {project.year}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
