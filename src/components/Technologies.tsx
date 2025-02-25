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
        setImages(data.images);
      } catch (error) {
        console.error("Erreur lors du chargement des images :", error);
      }
    };

    fetchImages();

    // Animation GSAP pour le carrousel
    
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`${styles.techItem} tech-item`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Technologies;
