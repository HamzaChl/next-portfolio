"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Global.module.css";

const Technologies: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/technologies");
        const data = await res.json();
        setImages(data.images || []);
      } catch (e) {
        console.error("Erreur lors du chargement des images :", e);
      }
    };
    fetchImages();
  }, []);

  if (images.length === 0) return null;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeInner}>
          {images.map((img, i) => (
            <div
              key={`a-${i}`}
              className={styles.techItem}
              style={{ backgroundImage: `url(${img})`, filter: "invert(1)" }}
            />
          ))}
        </div>
        <div className={styles.marqueeInner} aria-hidden="true">
          {images.map((img, i) => (
            <div
              key={`b-${i}`}
              className={styles.techItem}
              style={{ backgroundImage: `url(${img})`, filter: "invert(1)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
