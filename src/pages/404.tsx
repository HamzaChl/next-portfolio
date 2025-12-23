import React, { useEffect, useRef } from 'react'
import styles from "@/styles/Home.module.css";
import text from "@/styles/Text.module.css";
import gsap from "gsap";



const Error = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(()=>{
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
      })

  return (
    <div className='container' style={{textAlign:"center", display: "flex", justifyContent:"center", alignItems:"center", height:"center"}}>
        <div className={styles.error}>
        <h1 ref={titleRef} className={text.textHeading}>
          404 <span className={text.blueText}>Error</span>
        </h1>
        <p ref={subtitleRef} className={styles.subtitle}>
          Page non existante.
        </p>
      </div>
    </div>
  )
}

export default Error;