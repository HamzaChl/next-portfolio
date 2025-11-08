"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Technologies from "@/components/Technologies";
import ScrollZoom from "@/components/ScrollZoom";
import Faq from "@/components/Faq";
import DarkVeil from "@/components/DarkVeil";
import LightRays from "@/components/LightRays";
import TextAnim2 from "@/components/TextAnim2";
import SpotlightCards from "@/components/SpotlightCards";
import { ShinyText } from "@/components/ShinyText";
import GradualBlur from "@/components/GradualBlur/GradualBlur";

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
          noiseAmount={0.2}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className={styles.heroGrid}>
        <div className={styles.right}>
          <div ref={titleRef}>
            <h1 className={styles.heroTitle}>
              Impactvolle digitale <br /> ervaringen door
              <TextAnim2 />
            </h1>
          </div>
          <ShinyText speed={1.5}>
            <p ref={subtitleRef}>
              Met passie voor web & mobile design bouw ik toegankelijke en
              snelle interfaces.
            </p>
          </ShinyText>

          <div className={styles.techContainer}>
            <Technologies />
          </div>
          <SpotlightCards></SpotlightCards>
          <ScrollZoom />
        </div>
      </div>
    </section>
  );
};

export default Home;
