import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Nav.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MonLogo</div>
      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <a href="/" className={router.pathname === "/" ? styles.active : ""}>
          Accueil
        </a>
        <a
          href="/services"
          className={router.pathname === "/services" ? styles.active : ""}
        >
          Services
        </a>
        <a
          href="/projets"
          className={router.pathname === "/projets" ? styles.active : ""}
        >
          Projets
        </a>
        <a
          href="/about"
          className={router.pathname === "/about" ? styles.active : ""}
        >
          À propos
        </a>
        <a
          href="/lab"
          className={router.pathname === "/lab" ? styles.active : ""}
        >
          Laboratoire
        </a>
      </div>
      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default NavBar;
