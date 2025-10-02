import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav2";
import styles from "@/styles/Labo.module.css";
import text from "@/styles/Text.module.css";
import Technologies from "@/components/Technologies";
import ProjectGrid2 from "@/components/ProjectGrid2";
import BlogGrid from "@/components/BlogGrid";

const blog = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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
  });

  return (
    <>
      <div className="container"></div>
      <div className={text.e}>
        <h1 ref={titleRef} className={text.subHeading}>
          {" "}
          Blog. 📝
        </h1>
        <p ref={subtitleRef}>
          Juste en train de tester, ne pas faire attention.
        </p>
      </div>
      <div className="container">
        <BlogGrid></BlogGrid>
      </div>
      <div className="container"></div>
    </>
  );
};

export default blog;
