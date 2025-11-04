"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Technologies from "@/components/Technologies";
import ScrollZoom from "@/components/ScrollZoom";
import Faq from "@/components/Faq";

const Home = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaAnchorRef = useRef<HTMLAnchorElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, letterSpacing: "-0.03em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0em",
          duration: 1.4,
          ease: "power4.out",
        }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        ctaAnchorRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          delay: 0.6,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroGrid}>
        <div className={styles.right}>
          <div ref={titleRef}>
            <h1 className={styles.heroTitle}>
              Het creëren van impactvolle
              <br />
              visuele ervaringen door
            </h1>
            <h2 className={styles.heroSubTitle}>UI/UX Design</h2>
          </div>
          <p ref={subtitleRef} className={styles.subtitle}>
            Met passie voor web & mobile design bouw ik toegankelijke en snelle
            interfaces.
          </p>
          <div className={styles.techContainer}>
            <Technologies />
          </div>
          <ScrollZoom />
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default Home;
