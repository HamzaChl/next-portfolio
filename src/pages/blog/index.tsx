"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BlogGrid from "@/components/BlogGrid";
import styles from "@/styles/BlogGrid.module.css";

const Blog = () => {
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
      <section className={styles.blogHeader}>
        <h1 ref={titleRef} className={styles.pageTitle}>
          Mijn Stage Blog
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Tijdens mijn stageweken heb ik veel geleerd over webontwikkeling,
          design en teamwork. Deze blog neemt je mee door mijn ervaringen,
          uitdagingen en groei als student in softwareontwikkeling.
        </p>
      </section>

      <BlogGrid />
    </>
  );
};

export default Blog;
