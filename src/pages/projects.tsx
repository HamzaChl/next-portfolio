"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectGrid2 from "@/components/ProjectGrid2";
import styles from "@/styles/Project.module.css";

const Projects = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <section className={styles.projectHeader}>
        <h1 ref={titleRef} className={styles.pageTitle}>
          Mijn Creatieve Projecten
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
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
