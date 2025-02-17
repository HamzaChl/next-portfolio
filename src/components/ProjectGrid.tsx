import { useEffect, useState, useRef } from "react";
import styles from "@/styles/Project.module.css";
import { Project } from "@/functions/types";

const PROJECTS_URL =
  "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/projects.json";

const ProjectGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(PROJECTS_URL);
        if (!response.ok) throw new Error("Erreur de chargement des projets");

        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");

      if (projects.length > 0 && gridRef.current) {
        gsapModule.gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      }
    };

    loadGSAP();
  }, [projects]);

  return (
    <div ref={gridRef} className={styles.grid}>
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
          >
            <span className={styles.label}>{project.category}</span>
          </div>
          <h3 className={styles.title}>
            {project.title} ━ {project.year}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
