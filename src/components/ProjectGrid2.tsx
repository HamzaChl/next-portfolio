"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/Project.module.css";
import { Project } from "@/functions/types";

const ProjectGrid2 = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const gridRef = useRef<HTMLDivElement>(null);

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur lors du chargement des projets", error);
      }
    };
    fetchProjects();
  }, []);

  const allCategories = Array.from(
    new Set(projects.flatMap((p) => p.categories))
  ).sort();

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [activeCategory, projects]);

  if (projects.length === 0) return <p>Chargement...</p>;

  return (
    <section className={styles.wrapper}>
      <div className={styles.categoryMenu}>
        {["ALL", ...allCategories].map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryButton} ${
              activeCategory === cat ? styles.activeCategory : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={gridRef} className={styles.grid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Link href={`/projects/${generateSlug(project.title)}`}>
              <div
                className={styles.imageWrapper}
                style={
                  {
                    "--image": `url(${project.image})`,
                    "--hover": `url(${project.hoverImage})`,
                  } as React.CSSProperties
                }
              ></div>
            </Link>

            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.shortDescription && (
                <p className={styles.shortDescription}>
                  {project.shortDescription}
                </p>
              )}
            </div>

            <div className={styles.labelContainer}>
              {project.categories.map((cat, index) => (
                <span key={index} className={styles.projectLabel}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid2;
