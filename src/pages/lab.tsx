import React, { useEffect, useRef } from "react";
import ProjectGrid from "@/components/ProjectGrid";
import gsap from "gsap";

import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav2";
import styles from "@/styles/Labo.module.css"
import text from "@/styles/Text.module.css"
import Technologies from "@/components/Technologies";
import ProjectGrid2 from "@/components/ProjectGrid2";
import Faq from "@/components/Faq";
import Services from "@/components/Services";

const Lab = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

useEffect(()=>{
const b1 = "linear-gradient(217deg, rgba(255,0,0,.9), rgba(255,0,0,0) 70.71%),  linear-gradient(127deg, rgba(0,255,0,.9), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.9), rgba(0,0,255,0) 70.71%)";
const b2 = "linear-gradient(17deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%), linear-gradient(200deg, rgba(0, 255, 0, .9), rgba(0,255,0,.2) 70.71%),  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0.1) 70.71%)";
const b3 = "linear-gradient(217deg, rgba(99, 111, 164, .9), rgba(99, 111, 164, 0) 70.71%), linear-gradient(127deg, rgba(232, 203, 192, .9), rgba(232, 203, 192, 0) 70.71%), linear-gradient(336deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 0) 70.71%)";
const b4 = "linear-gradient(17deg, rgba(99, 111, 164, .7), rgba(99, 111, 164, 0) 70.71%), linear-gradient(200deg, rgba(232, 203, 192, .9), rgba(232, 203, 192, .2) 70.71%), linear-gradient(336deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, 0.1) 70.71%)";

gsap.fromTo("#a", {width:300, height:300, background: b1}, {ease: "none", duration: 6, background: b2, repeat: -1, yoyo: true});

gsap.fromTo("#b", {width:300, height:300, background: b3}, {ease: "none", duration: 6, background: b4, repeat: -1, yoyo: true});


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

})

  return (
    <>
    <div className="container"></div>
        <div className={text.e}>
          <h1 ref={titleRef} className={text.subHeading}> Laboratoire. 🏗</h1>
          <p ref={subtitleRef}>Juste en train de tester, ne pas faire attention.</p>
        </div>

        <div ref={containerRef} className={styles.testContainer}>

          <div className={styles.TestPerimeter}>
              <div id="a" className="a" ></div>
              <p>Dégradé animée avec GSAP</p>
          </div>

          <div className={styles.TestPerimeter}>
              <div id="b" className="b" style={{borderRadius:"50%"}}></div>
              <p>Dégradé animée avec GSAP</p>
          </div>
          <div className={styles.TestPerimeter}>
              <div id="b" className="b" style={{borderRadius:"50%"}}></div>
              <p>Dégradé animée avec GSAP</p>
          </div>
          <div className={styles.TestPerimeter}>
              <div id="b" className="b" style={{borderRadius:"50%"}}></div>
              <p>Dégradé animée avec GSAP</p>
          </div>

        </div>
<div className="" style={{background:"lightgray"}}>

        <Technologies/>
</div>
<Faq/>
<div className="container">
  <Services/>
</div>
        
    </>
  )
}

export default Lab;
