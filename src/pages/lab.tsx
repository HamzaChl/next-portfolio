import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "@/styles/Labo.module.css";
import text from "@/styles/Text.module.css";
import Technologies from "@/components/Technologies";

import Faq from "@/components/Faq";
import Services from "@/components/Services";
import TextAnim1 from "@/components/TextAnim1";
import TextAnim2 from "@/components/TextAnim2";
import { ShinyText } from "@/components/ShinyText";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import Nav3 from "@/components/Nav3";
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import SpotlightCards from "@/components/SpotlightCards";
import SplitText from "../components/SplitText/SplitText";

const Lab = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const b1 =
      "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";
    const b2 =
      "linear-gradient(17deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%), linear-gradient(200deg, rgba(0, 255, 0, .9), rgba(0,255,0,.2) 70.71%),  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0.1) 70.71%)";
    const b3 =
      "linear-gradient(217deg, rgba(99, 111, 164, .9), rgba(99, 111, 164, 0) 70.71%), linear-gradient(127deg, rgba(232, 203, 192, .9), rgba(232, 203, 192, 0) 70.71%), linear-gradient(336deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 0) 70.71%)";
    const b4 =
      "linear-gradient(17deg, rgba(99, 111, 164, .7), rgba(99, 111, 164, 0) 70.71%), linear-gradient(200deg, rgba(232, 203, 192, .9), rgba(232, 203, 192, .2) 70.71%), linear-gradient(336deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 0.1) 70.71%)";

    gsap.fromTo(
      "#a",
      { width: 300, height: 300, background: b1 },
      { ease: "none", duration: 6, background: b2, repeat: -1, yoyo: true }
    );

    gsap.fromTo(
      "#b",
      { width: 300, height: 300, background: b3 },
      { ease: "none", duration: 6, background: b4, repeat: -1, yoyo: true }
    );

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
      containerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  });

  return (
    <>
      <div className="container"></div>

      <div className={text.e}>
        <h1 ref={titleRef} className={text.subHeading}>
          {" "}
          Laboratoire. 🏗
        </h1>
        <p ref={subtitleRef}>
          Juste en train de tester, ne pas faire attention.
        </p>
      </div>

      <div ref={containerRef} className={styles.testContainer}>
        <div className={styles.TestPerimeter}>
          <div id="a" className="a"></div>
          <p>Dégradé animée avec GSAP</p>
        </div>

        <div className={styles.TestPerimeter}>
          <div id="b" className="b" style={{ borderRadius: "50%" }}></div>
          <p>Dégradé animée avec GSAP</p>
        </div>
        <div className={styles.TestPerimeter}>
          <div id="b" className="b" style={{ borderRadius: "50%" }}></div>
          <p>Dégradé animée avec GSAP</p>
        </div>
        <div className={styles.TestPerimeter}>
          <div id="b" className="b" style={{ borderRadius: "50%" }}></div>
          <p>Dégradé animée avec GSAP</p>
        </div>
      </div>
      <div className="" style={{ background: "lightgray" }}>
        <Technologies />
      </div>
      <Faq />
      <div className="container">
        <Services />
      </div>
      <div className="container">
        <TextAnim1 />
      </div>
      <div className="container"></div>
      <div className="container">
        <TextAnim2 />
      </div>

      <div className="container">
        <SpotlightCards></SpotlightCards>
      </div>

      <div className="container">
        <Nav3 />
      </div>

      <div className="container">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "400px",
            border: "red",
            backgroundColor: "#000",
            borderWidth: "2px",
          }}
        >
          <ShinyText speed={2.5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            necessitatibus id quam earum magni consectetur cum illum corporis
            sit doloribus in nulla, aliquam, sunt accusamus fugiat facere illo
            dolore voluptates?
          </ShinyText>
        </div>
      </div>
    </>
  );
};

export default Lab;
