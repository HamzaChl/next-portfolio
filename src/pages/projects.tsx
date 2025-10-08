import ProjectGrid2 from "@/components/ProjectGrid2";
import styles from "@/styles/Project.module.css";
import React from "react";

const Projects = () => {
  return (
    <>
      <section className={styles.projectHeader}>
        <h1 className={styles.pageTitle}>Mijn Creatieve Projecten</h1>

        <p className={styles.subtitle}>
          Van webplatforms tot interactieve interfaces: deze projecten tonen de
          kern van mijn creatieve en technische reis. Elk werk is een balans
          tussen esthetische visie en functioneel design — gemaakt om te
          inspireren en te verbinden.
        </p>
      </section>

      <ProjectGrid2 />
    </>
  );
};

export default Projects;
