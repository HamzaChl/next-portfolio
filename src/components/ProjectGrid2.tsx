"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/Project.module.css";
import { Project } from "@/functions/types";
import projects from "../../public/projects.json";

const ProjectGrid2 = () => {
  const [sortBy, setSortBy] = useState<"year" | "title" | "category">("year");
  const gridRef = useRef<HTMLDivElement>(null);

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // Fonction pour générer une couleur pastel basée sur le texte de la catégorie
  const generatePastelColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360); // Assure que la teinte est entre 0 et 360
    return `hsl(${hue}, 70%, 85%)`; // Teinte pastel
  };

  useEffect(() => {
    if (sortedProjects.length > 0 && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, [sortedProjects]);

  return (
    <div ref={gridRef} className={styles.grid}>
      {sortedProjects.map((project) => (
        <div key={project.id} className={styles.projectContainer}>
          <Link
            href={`/projects/${generateSlug(project.title)}`}
            className={styles.projectLink}
          >
            <div
              className={styles.project}
              style={
                {
                  "--image": `url(${project.image})`,
                  "--hover": `url(${project.hoverImage})`,
                } as React.CSSProperties
              }
            >
              <span
                className={styles.label}
                style={{ backgroundColor: generatePastelColor(project.category) }}
              >
                {project.category}
              </span>
            </div>
          </Link>
          <h3 className={styles.title}>
            {project.title} ━ {project.year}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid2;
