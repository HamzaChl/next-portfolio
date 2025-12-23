import React from "react";
import styles from "@/styles/Project.module.css";
import { useEffect, useState, useRef } from "react";
import { Project } from "@/functions/types";

const PROJECTS_URL =
  "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/projects.json";

const Sorting = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortBy, setSortBy] = useState<"year" | "title" | "category">("year");
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

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "category") {
      return a.categories.join(", ").localeCompare(b.categories.join(", "));
    }
    return 0;
  });

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
    <div className={styles.sortMenu}>
      {["year", "title", "category"].map((key) => (
        <label
          key={key}
          className={sortBy === key ? styles.active : styles.inactive}
          onClick={() => setSortBy(key as "year" | "title" | "category")}
        >
          {key === "year" ? "Année" : key === "title" ? "Titre" : "Catégorie"}
        </label>
      ))}
    </div>
  );
};

export default Sorting;
