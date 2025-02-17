"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const cursorRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  
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
    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.5, delay: 0.6, ease: "back.out(1.7)" }
    );
  }, []);

  

  return (
    <div className={styles.homeContainer}>
    
      <h1 ref={titleRef} className={styles.title}>
        Développeur Web & Designer
      </h1>
      <p ref={subtitleRef} className={styles.subtitle}>
        Créons ensemble des expériences numériques uniques.
      </p>
      

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
