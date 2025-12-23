import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Nav2.module.css";
import { IoIosMail } from "react-icons/io";

// ⚠️ adapte le chemin vers ton composant GlassSurface
import GlassSurface from "./GlassSurface";

function Resume() {
  alert("Je n'ai pas de contact pour l'instant !");
}

const Nav2 = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  // Contenu principal de la navbar (sans GlassSurface)
  const navContent = (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>Hamza</div>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={router.pathname === "/projects" ? styles.active : ""}
            >
              Projecten
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
        </ul>

        <div className={styles.ctaContainer}>
          <button onClick={Resume} className={styles.ctaButton}>
            Contact <IoIosMail size={20} />
          </button>
        </div>
      </div>
    </nav>
  );

  return (
    <header className={styles.headerContainer}>
      {/* Quand on scrolle, on active le GlassSurface autour de la navbar */}
      {scrolled ? (
        <GlassSurface
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.8}
          mixBlendMode="screen"
        >
          {navContent}
        </GlassSurface>
      ) : (
        navContent
      )}

      <div
        className={`${styles.mobileMenu} ${
          scrolled ? styles.mobileScrolled : ""
        }`}
      >
        <div className={styles.logo}>
          HAMZA
          <span
            className={`${styles.statusIndicator} ${
              isAvailable ? styles.online : styles.offline
            }`}
          ></span>
        </div>
        <div
          className={styles.burger}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      </div>

      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
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
      </div>
    </header>
  );
};

export default Nav2;
