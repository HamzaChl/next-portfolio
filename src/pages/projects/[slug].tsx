"use client";

import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft } from "react-icons/fa"; // Icône de flèche
import styles from "@/styles/Project.module.css";
import { Project, ProjectCategory } from "@/functions/types"; // Import de l'énumération
import projects from "../../../public/projects.json"; // Import du JSON local

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Recherche du projet dans les données locales
        const foundProject = projects.find(
          (proj) => proj.title.toLowerCase().replace(/\s+/g, "-") === slug
        );

        if (foundProject) {
          // Conversion explicite de la catégorie en ProjectCategory
          foundProject.category = foundProject.category as ProjectCategory;
          setProject(foundProject);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (slug) fetchProject();
  }, [slug]);

  
  if (!project) return <p>Chargement...</p>;

  // Fonction pour retourner à la page /projects
  const goBack = () => {
    router.push("/projects");
  };

  return (
    <div ref={containerRef} className="container">
      <button onClick={goBack} className={styles.backButton}>
        <FaArrowLeft /> Retour aux projets
      </button>

      <h1>{project.title}</h1>
      <p>Année: {project.year}</p>
      <p>Catégorie: {project.category}</p>

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
  );
};

export default ProjectPage;
