"use client";

import { useEffect, useRef } from "react";

const ScrollZoom2 = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const run = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!wrapperRef.current || boxesRef.current.length === 0) return;

      gsap.set(boxesRef.current, {
        scale: 0.5,
        opacity: 0.25,
        transformOrigin: "center center",
      });

      ctx = gsap.context(() => {
        gsap.fromTo(
          boxesRef.current,
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
          },
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
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0px",
          width: "100%",
        }}
      >
        {[0, 1].map((i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) boxesRef.current[i] = el;
            }}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundImage:
                i === 0 ? "url(Images/o01.png)" : "url(Images/o02.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              backgroundColor: "#111",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollZoom2;
