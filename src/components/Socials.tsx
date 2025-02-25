
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import styles from "@/styles/Home.module.css";
import React from 'react'

const Socials = () => {
  return (
    <div className={styles.socials}>
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
  )
}

export default Socials