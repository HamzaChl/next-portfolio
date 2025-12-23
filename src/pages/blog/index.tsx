"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import BlogGrid from "@/components/BlogGrid";
import styles from "@/styles/BlogGrid.module.css";
import LightRays from "@/components/LightRays";
import { ShinyText } from "@/components/ShinyText";

const Blog = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

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
      {/* LIGHT RAYS FIX (ne bloque plus les clics) */}
      <div
        style={{
          width: "100%",
          height: "900px",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none", // IMPORTANT FIX ✔️
          zIndex: 0,
        }}
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

      <section
        className={styles.blogHeader}
        style={{ position: "relative", zIndex: 1 }}
      >
        <h1 ref={titleRef} className={styles.pageTitle}>
          Mijn Stage Blog
        </h1>

        <ShinyText speed={1.5}>
          <p ref={subtitleRef} className={styles.subtitle}>
            Tijdens mijn stageweken heb ik veel geleerd over webontwikkeling,
            design en teamwork. Deze blog neemt je mee door mijn ervaringen,
            uitdagingen en groei als student in softwareontwikkeling.
          </p>
        </ShinyText>
      </section>

      <div style={{ position: "relative", zIndex: 1 }}>
        <BlogGrid />
      </div>
    </div>
  );
};

export default Blog;
