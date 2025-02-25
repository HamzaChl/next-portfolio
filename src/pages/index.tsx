"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import styles from "@/styles/Home.module.css";
import text from "@/styles/Text.module.css";
import Technologies from "@/components/Technologies";
import Spacer from "@/components/Spacer";

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

    

  }, []);

  return (
    <>
    <div className={styles.homeContainer}>
      {/* <div ref={lightRef} className={styles.lightEffect}></div> */}
      

      <div className={styles.subContainer}>
        <h1 ref={titleRef} className={text.textHeading}>
        Développement <span className={text.blueText}>web</span> & <span className={text.blueText}>mobile</span><br /> concrétisez vos idées avec <span className={text.blueText}>style</span>.
        </h1>
        <p ref={subtitleRef} className={text.subtitle}>
          Développeur passionné, je conçois des applications web et mobiles performantes et élégantes. Besoin d'un site sur-mesure ou d'une app innovante ? Parlons-en !
        </p>
      </div>

    <Spacer/>
      
    <Technologies/>
    </div>
    <div className={styles.homeContainer}>

    </div>
    </>
  );
};

export default Home;
