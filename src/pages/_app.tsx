import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useLenis } from "@/functions/useLenis";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  useLenis(); 

  return (
    <>
    <ThemeProvider>
      <Nav2 />
      <Component {...pageProps} />
      <ScrollToTop/>
      <Footer />
    </ThemeProvider>
    </>
  );
}
