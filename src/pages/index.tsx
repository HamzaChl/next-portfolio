"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Home.module.css";

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bangRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          letterSpacing: "-0.03em",
          opacity: 0.85,
          y: 10,
        },
        {
          letterSpacing: "0em",
          opacity: 1,
          y: 0,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );

      gsap.to(bangRef.current, {
        rotate: 360,
        duration: 6,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.heroContainer}>
      <h1 ref={titleRef} className={styles.heroText}>
        Je donne vie à vos idées
        <span ref={bangRef} className={styles.bang}>
          !
        </span>
      </h1>
    </div>
  );
};

export default Home;
