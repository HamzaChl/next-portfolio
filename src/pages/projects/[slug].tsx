"use client";

import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft } from "react-icons/fa";
import styles from "@/styles/Project.module.css";
import { Project, ProjectCategory } from "@/functions/types";

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
        const foundProject = data.find((proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === slug);

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
      gsap.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    }
  }, [project]);

  if (!project) return <p>Chargement...</p>;

  return (
    <div ref={containerRef} className="container">
      <button onClick={() => router.push("/projects")} className={styles.backButton}>
        <FaArrowLeft /> Retour aux projets
      </button>

      <h1>{project.title}</h1>
      <p>Année: {project.year}</p>
      <p>Catégorie: {project.category}</p>

      <div className={styles.imagesGrid}>
        {project.projectImages?.map((img, index) => (
          <img className={styles.imgProject} key={index} src={img} alt={`Project ${project.title} ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
