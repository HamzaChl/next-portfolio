"use client";

import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft } from "react-icons/fa";
import styles from "@/styles/Project.module.css";
import { Project } from "@/functions/types";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/api/projects");
        const data: Project[] = await response.json();
        const foundProject = data.find(
          (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === slug
        );

        if (foundProject) {
          setProject(foundProject);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (slug) fetchProject();
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [project]);

  if (!project) return <p>Chargement...</p>;

  const generatePastelColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 85%)`;
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.aside}>
        <button
          onClick={() => router.push("/projects")}
          className={styles.backButton}
        >
          <FaArrowLeft /> Retour aux projets
        </button>

        <h1>{project.title}</h1>
        <p>Année: {project.year}</p>
        <br />

        <p>Catégories</p>
        <br />
        <div className={styles.labelsContainer}>
          {project.categories.map((cat, index) => (
            <span
              key={index}
              className={styles.label}
              style={{
                backgroundColor: generatePastelColor(cat),
                marginRight: 10,
                color: "#000",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="images">
        <div className={styles.imagesGrid}>
          {project.projectImages?.map((img, index) => (
            <img
              className={styles.imgProject}
              key={index}
              src={img}
              alt={`Project ${project.title} ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
