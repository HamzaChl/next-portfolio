"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Nav2.module.css";

const Nav2 = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logo}>HAMZA</div>

      <ul className={styles.navLinks}>
        <li>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={router.pathname === "/projects" ? styles.active : ""}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/lab"
            className={router.pathname === "/lab" ? styles.active : ""}
          >
            Laboratoire
          </Link>
        </li>
      </ul>
<div className={styles.ctaContainer}>
      <button className={styles.ctaButton}>Contact</button>
      <button className={styles.ctaButton}>Résumé</button>
</div>
    </nav>
  );
};

export default Nav2;
