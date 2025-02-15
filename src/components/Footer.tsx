import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          
          
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
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">À propos</Link>
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
