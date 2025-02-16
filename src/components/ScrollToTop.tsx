import { useState, useEffect } from "react";
import styles from "@/styles/ScrollToTop.module.css";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${styles.scrollToTop} ${isVisible ? styles.show : ""}`} onClick={scrollToTop}>
      <IoIosArrowUp size={30} />
    </div>
  );
};

export default ScrollToTop;
