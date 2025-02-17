import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Project.module.css";
import { Project } from "@/functions/types";

const PROJECTS_URL =
  "https://raw.githubusercontent.com/HamzaChl/portfolio-urls/main/projects.json";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<Project | null>(null);

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

  if (!project) return <p>Chargement...</p>;

  return (
    <>
    <div className="container">
      <h1>{project.title}</h1>
      <p>Année: {project.year}</p>
      <p>Catégorie: {project.category}</p>
      
    </div>
      <div className={styles.imagesGrid}>
        {project.projectImages?.map((img, index) => (
          <img className={styles.imgProject} key={index} src={img} alt={`Project ${project.title} ${index}`} />
          ))}
      </div>
    </>
  );
};

export default ProjectPage;
