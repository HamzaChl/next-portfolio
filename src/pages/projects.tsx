"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectGrid2 from "@/components/ProjectGrid2";
import styles from "@/styles/Project.module.css";
import LightRays from "@/components/LightRays";
import GradualBlur from "@/components/GradualBlur/GradualBlur";
import { ShinyText } from "@/components/ShinyText";

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
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{ width: "100%", height: "900px", position: "absolute", top: 0 }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#94beff"
          raysSpeed={1.9}
          lightSpread={0.8}
          rayLength={0.9}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.5}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <section className={styles.projectHeader}>
        <h1 ref={titleRef} className={styles.pageTitle}>
          Mijn Creatieve Projecten
        </h1>
        <ShinyText speed={1.5}>
          <p ref={subtitleRef} className={styles.subtitle}>
            Van webplatforms tot interactieve interfaces: deze projecten tonen
            de kern van mijn creatieve en technische reis. Elk werk is een
            balans tussen esthetische visie en functioneel design — gemaakt om
            te inspireren en te verbinden.
          </p>
        </ShinyText>
      </section>

      <ProjectGrid2 />
    </div>
  );
};

export default Projects;
