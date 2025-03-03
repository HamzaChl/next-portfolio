import React, { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import styles from "@/styles/Global.module.css";
import text from "@/styles/Text.module.css";

const faqData = [
  { question: "Question", answer: "Réponse." },
  { question: "Question", answer: "Réponse." },
  { question: "Question", answer: "Réponse." },
  { question: "Question", answer: "Réponse." },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          gsap.to(ref, { height: "auto", opacity: 1, padding: "15px 0px 15px 10px", duration: 0.3, ease: "power2.out" });
        } else {
          gsap.to(ref, { height: 0, opacity: 0, padding: "0px 0 0 10px", duration: 0.3, ease: "power2.in" });
        }
      }
    });

    
  }, [activeIndex]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer} style={{ width: "70%", margin: "0 auto" }}>
      <h1 className={text.subHeading} style={{ textAlign: "center" }}>
        <span className="blueText">Foire aux Questions</span>
      </h1>
      <p className={styles.faqDescription}>Retrouvez ici les réponses aux questions les plus fréquentes.</p>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            <div 
              ref={(el) => {
                if (el) answerRefs.current[index] = el;
              }}
              className={styles.faqAnswer} 
              style={{ height: 0, overflow: "hidden", opacity: 0, padding: "0px" }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;