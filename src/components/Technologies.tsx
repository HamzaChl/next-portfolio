"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "@/styles/Global.module.css";

const Technologies = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "linear" } });
    
    tl.to(carouselRef.current, {
      x: "-50%",
      duration: 10,
    })
    .set(carouselRef.current, { x: "0%" });
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef}>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "red" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "blue" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "green" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "yellow" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "purple" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "red" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "blue" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "green" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "yellow" }}></div>
          <div className={`${styles.techItem} tech-item`} style={{ backgroundColor: "purple" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
