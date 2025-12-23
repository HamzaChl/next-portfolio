import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Socials />
        </div>

        <div className={styles.column}></div>

        <div className={styles.column}>
          <h3>Snelle links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projecten</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Nuttige links</h3>
          <ul>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/legal-mentions">Mentions légales</Link>
            </li>
            <li>
              <Link href="/lab">Lab</Link>
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
