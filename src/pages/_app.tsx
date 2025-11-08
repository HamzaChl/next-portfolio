import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";
import "../styles/DarkVeil.css";
import "../styles/LightRays.css";
import "../styles/VariableProximity.css";
import "../styles/RotatingText.css";
import "../styles/Global.module.css";
import "../styles/CardNav.module.css";
import ClickSpark from "@/components/ClickSpark";

export default function App({ Component, pageProps }: AppProps) {
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
