"use client";

import { useEffect, useRef } from "react";

const ScrollZoom = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const run = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!wrapperRef.current || !boxRef.current) return;

      gsap.set(boxRef.current, {
        scale: 0.5,
        opacity: 0.25,
        transformOrigin: "center center",
      });

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
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
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
          aspectRatio: "16 / 9",
          backgroundImage: "url(Images/projects/03-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
          willChange: "transform",
          backgroundColor: "#111",
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default ScrollZoom;
