"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "@/styles/Global.module.css";

const Technologies: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/technologies");
        const data = await response.json();
        setImages([...data.images, ...data.images]);
      } catch (error) {
        console.error("Erreur lors du chargement des images :", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (!carouselRef.current || images.length === 0) return;

    const totalWidth = carouselRef.current.scrollWidth / 2;

    gsap.to(carouselRef.current, {
      x: `-${totalWidth}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, [images]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef}>
          {images.map((img, index) => (
            <div
              key={index}
              className={styles.techItem}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
