import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Nav2.module.css";

const Nav2 = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>

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
            href="/about"
            className={router.pathname === "/about" ? styles.active : ""}
          >
            À propos
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

      <button className={styles.ctaButton}>S'inscrire</button>
    </nav>
  );
};

export default Nav2;
