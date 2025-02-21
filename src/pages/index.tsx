"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const lightRef = useRef(null); // Ref pour l'effet lumineux

  useEffect(() => {
    // Animation du texte et du bouton
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

    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.5, delay: 0.6, ease: "back.out(1.7)" }
    );

    gsap.to(lightRef.current, {
      height: "70vh", 
      scale: 1.2, 
      opacity: 0.8,
      duration: 3, 
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });

  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Effet lumineux */}
      <div ref={lightRef} className={styles.lightEffect}></div>

      <div className={styles.subContainer}>
        <h1 ref={titleRef} className={styles.title}>
          Transformons vos idées en <br />expériences numériques
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Développeur passionné, je conçois des applications web et mobiles performantes et élégantes. Besoin d'un site sur-mesure ou d'une app innovante ? Parlons-en !
        </p>
      </div>

      {/* Icônes réseaux sociaux */}
      <div className={styles.socials}>
        <a href="https://github.com/HamzaChl" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/hamzaachl/" target="_blank">
          <FaInstagram />
        </a>
        <a href="mailto:contact@exemple.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Home;
