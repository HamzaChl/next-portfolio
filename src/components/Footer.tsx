import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <Socials/>
        </div>

        <div className={styles.column}>
        </div>

        <div className={styles.column}>
          <h3>Liens rapides</h3>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2025 Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
