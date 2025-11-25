import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/DarkVeil.css";
import "../styles/LightRays.css";
import "../styles/VariableProximity.css";
import "../styles/RotatingText.css";
import "../styles/Global.module.css";
import "../styles/CardNav.module.css";
import ClickSpark from "@/components/ClickSpark";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,

      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ClickSpark
        sparkColor="#94beff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Nav2 />
        <Component {...pageProps} />
        <ScrollToTop />
        <Footer />
      </ClickSpark>
    </>
  );
}
