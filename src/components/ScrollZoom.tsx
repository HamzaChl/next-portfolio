"use client";

import { useEffect, useRef } from "react";

const ScrollZoom = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        boxRef.current,
        { scaleX: 0.1, scaleY: 0.5, opacity: 0.2 },
        {
          scaleX: 0.95,
          scaleY: 0.95,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top bottom",
            end: "bottom top+=300",
            scrub: true,
            markers: false,
          },
        }
      );
    };

    loadGsap();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 25vw",
        margin: "50px 0",
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: "100%",
          aspectRatio: "16 / 7",
          backgroundColor: "#111",
          borderRadius: "20px",
          transformOrigin: "center center",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        }}
      ></div>
    </div>
  );
};

export default ScrollZoom;
