"use client";

import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import de l'icône de flèche gauche
import styles from "@/styles/Project.module.css";
import { Project } from "@/functions/types";
import gsap from "gsap";

const PROJECTS_URL =
  "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/projects.json";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fonction pour récupérer les données du projet
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(PROJECTS_URL);
        if (!response.ok) throw new Error("Erreur de chargement des projets");

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

  // Animation avec GSAP
  useEffect(() => {
    if (project) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [project]);

  // Vérification si le projet est en cours de chargement
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
