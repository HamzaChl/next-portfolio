import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav2";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav2 />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
