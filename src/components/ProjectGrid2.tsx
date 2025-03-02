"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/Project.module.css";
import text from "@/styles/Text.module.css";
import { Project } from "@/functions/types";

const ProjectGrid2 = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortBy, setSortBy] = useState<"year" | "title" | "category">("year");
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Fonction pour générer un slug à partir du titre
  const generateSlug = (title: string) => title.toLowerCase().replace(/\s+/g, "-");

  // Fonction pour générer une couleur pastel unique par catégorie
  const generatePastelColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 85%)`;
  };

  // Récupération des projets via l'API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets", error);
      }
    };

    fetchProjects();
  }, []);

  // Tri des projets
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // Animation GSAP au chargement des projets
  useEffect(() => {
    if (sortedProjects.length > 0 && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
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
      <div className={text.e}>
        <h1 ref={titleRef} className={text.subHeading}>Mes réalisations</h1>
        <p ref={subtitleRef} className={text.corpsText}>
          Découvrez une sélection de mes réalisations en développement web, mobile et design.
          De l'idée à la mise en ligne, chaque projet est conçu avec passion et précision.
        </p>
      </div>

      <div ref={gridRef} className={styles.grid}>
        {sortedProjects.map((project) => (
          <div key={project.id} className={styles.projectContainer}>
            <Link href={`/projects/${generateSlug(project.title)}`} className={styles.projectLink}>
              <div className={styles.project} style={
                {
                  "--image": `url(${project.image})`,
                  "--hover": `url(${project.hoverImage})`,
                } as React.CSSProperties
              }>
                <span className={styles.label} style={{ backgroundColor: generatePastelColor(project.category) }}>
                  {project.category}
                </span>
              </div>
            </Link>
            <h3 className={styles.title}>{project.title} ━ {project.year}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid2;
