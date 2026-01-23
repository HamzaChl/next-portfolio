"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Home.module.css";
import Technologies from "@/components/Technologies";
import ScrollZoom from "@/components/ScrollZoom";
import LightRays from "@/components/LightRays";
import TextAnim2 from "@/components/TextAnim2";
import SpotlightCards from "@/components/SpotlightCards";
import { ShinyText } from "@/components/ShinyText";
import ScrollReveal from "@/components/ScrollReveal";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiAdobecreativecloud,
  SiWordpress,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";
import ScrollZoom2 from "@/components/ScrollZoom2";

const Home = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaAnchorRef = useRef<HTMLAnchorElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },

    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },

    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },

    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiFigma />,
      title: "Figma",
      href: "https://www.figma.com/",
    },
    {
      node: <SiAdobecreativecloud />,
      title: "Creative Cloud",
      href: "https://www.adobe.com/be_fr/",
    },
    {
      node: <SiWordpress />,
      title: "WordPress",
      href: "https://www.wordpress.com/",
    },
  ];

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
        },
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" },
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
        },
      );
      gsap.fromTo(
        photoRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
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
          rayLength={3.9}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.5}
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
          <div>
            <Link href="/lab" className={styles.ctahome}>
              Labo cta
            </Link>
          </div>

          <div className={styles.techContainer}>
            <ScrollReveal>
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                  margin: "70px 10px",
                }}
              >
                <LogoLoop
                  logos={techLogos}
                  speed={50}
                  direction="left"
                  logoHeight={48}
                  gap={140}
                  hoverSpeed={40}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#0a0a0a"
                  ariaLabel="Technology partners"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className={styles.separator}>
            <ScrollReveal start="top 100%">
              <SpotlightCards></SpotlightCards>
            </ScrollReveal>
          </div>

          <ScrollZoom />
          <ScrollZoom2 />
        </div>
      </div>
    </section>
  );
};

export default Home;
