"use client";

import { useEffect, useRef } from "react";

const ScrollZoom = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const run = async () => {
      // Import propre de gsap et du plugin
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!wrapperRef.current || !boxRef.current) return;

      // Valeur initiale sûre au cas où GSAP met un petit délai
      gsap.set(boxRef.current, {
        scale: 0.5,
        opacity: 0.25,
        transformOrigin: "center center",
      });

      // Contexte pour cleanup auto
      ctx = gsap.context(() => {
        gsap.fromTo(
          boxRef.current,
          { scale: 0.5, opacity: 0.25 },
          {
            scale: 0.95,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom", // commence quand le haut du wrapper touche le bas du viewport
              end: "bottom bottom", // termine quand le bas du wrapper touche le bas du viewport (100% visible)
              scrub: 0.6, // bi-directionnel, fluide
              invalidateOnRefresh: true,
              // markers: true,          // débug si besoin
            },
          }
        );
      }, wrapperRef);

      ScrollTrigger.refresh();
    };

    run();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "10px",
        margin: "50px 0",
        paddingBottom: "10vh",
      }}
    >
      <div
        ref={boxRef}
        style={{
          width: "100%",
          aspectRatio: "16 / 7",
          backgroundColor: "#111",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default ScrollZoom;
