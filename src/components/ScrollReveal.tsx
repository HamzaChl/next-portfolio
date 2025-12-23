"use client";

import React, { useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  offsetY?: number;
  duration?: number;
  start?: string;
  end?: string;
  initialOpacity?: number;
  className?: string;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  offsetY = 40,
  duration = 1,
  start = "top 90%",
  end = "bottom 20%",
  initialOpacity = 0,
  className,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any;

    const setup = async () => {
      const gsapMod = await import("gsap");
      const ScrollTriggerMod = await import("gsap/ScrollTrigger");
      const gsap = (gsapMod as any).gsap || gsapMod.default || gsapMod;
      const ScrollTrigger = ScrollTriggerMod.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      if (!wrapperRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          wrapperRef.current,
          { y: offsetY, opacity: initialOpacity },
          {
            y: 0,
            opacity: 1,
            duration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start,
              end,
              scrub: true,
            },
          }
        );
      }, wrapperRef);
    };

    setup();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [offsetY, duration, start, end, initialOpacity]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
