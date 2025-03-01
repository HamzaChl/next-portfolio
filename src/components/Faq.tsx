import React, { useState } from 'react';
import styles from "@/styles/Global.module.css";
import text from "@/styles/Text.module.css";

const faqData = [
  { question: "Comment fonctionne ce service ?", answer: "Notre service vous permet de ..." },
  { question: "Quels sont les modes de paiement acceptés ?", answer: "Nous acceptons les cartes bancaires, PayPal..." },
  { question: "Puis-je annuler mon abonnement ?", answer: "Oui, vous pouvez annuler votre abonnement à tout moment..." },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h1 className={text.subHeading} style={{textAlign:"center"}}><span className="blueText">Foire aux Questions</span></h1>
      <p className={styles.faqDescription}>Retrouvez ici les réponses aux questions les plus fréquentes.</p>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;