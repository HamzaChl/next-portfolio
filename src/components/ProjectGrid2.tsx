"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/Project.module.css";
import text from "@/styles/Text.module.css";

// Définition du type Project
export interface Project {
  id: number;
  title: string;
  year: number;
  image: string;
  hoverImage: string;
  categories: string[];
  projectImages?: string[];
}

const ProjectGrid2 = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortBy, setSortBy] = useState<"year" | "title" | "category">("year");
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  const generatePastelColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 85%)`;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();

        const formattedProjects = data.map((project: any) => ({
          ...project,
          categories: Array.isArray(project.categories)
            ? project.categories
            : [project.categories],
        }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets", error);
      }
    };

    fetchProjects();
  }, []);

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "category")
      return a.categories.join(", ").localeCompare(b.categories.join(", "));
    return 0;
  });

  useEffect(() => {
    if (sortedProjects.length > 0 && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
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
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );
  }, [sortedProjects]);

  if (projects.length === 0) return <p>Chargement...</p>;

  return (
    <div>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="sort" style={{ marginRight: "0.5rem" }}>
          Trier par :
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
          }}
        >
          <option value="year">Année (du plus récent)</option>
          <option value="title">Titre (A-Z)</option>
          <option value="category">Catégorie</option>
        </select>
      </div>

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
                <div className={styles.labels}>
                  {project.categories.map((cat, index) => (
                    <span
                      key={index}
                      className={styles.label}
                      style={{ backgroundColor: generatePastelColor(cat) }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid2;
