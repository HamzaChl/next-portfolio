"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/Project.module.css";
import text from "@/styles/Text.module.css";
import { Project } from "@/functions/types";
import projects from "../../public/projects.json";

const ProjectGrid2 = () => {
  const [sortBy, setSortBy] = useState<"year" | "title" | "category">("year");
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lightRef = useRef(null);


  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const generatePastelColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360); 
    return `hsl(${hue}, 70%, 85%)`;
  };

  useEffect(() => {
    if (sortedProjects.length > 0 && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, x: 20, scale: 0.9 },
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

  useEffect(()=>{
    gsap.fromTo(
      titleRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );
  })

  return (
<div>
{/* <div ref={lightRef} className={styles.lightEffect}></div> */}
<div className={text.e}>
  <h1 ref={titleRef} className={text.subHeading}>Mes réalisations</h1>
  <p ref={subtitleRef} className={text.corpsText}>Découvrez une sélection de mes réalisations en développement web, mobile et design. De l'idée à la mise en ligne, chaque projet est conçu avec passion et précision.</p>
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
      </div>
  );
};

export default ProjectGrid2;
