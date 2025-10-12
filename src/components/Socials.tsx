import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import styles from "@/styles/Home.module.css";
import React from "react";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#4568dc", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#b06ab3", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>

      <a href="https://github.com/HamzaChl" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/hamzaachl/" target="_blank">
        <FaInstagram />
      </a>
      <a href="mailto:contact@exemple.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default Socials;
