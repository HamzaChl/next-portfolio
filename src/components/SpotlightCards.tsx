import React from "react";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import styles from "@/styles/Global.module.css";

export default function SpotlightCards() {
  return (
    <div className="spotlight-grid">
      <SpotlightCard
        className="card-spotlight"
        spotlightColor="rgba(148, 190, 255, 0.4)"
      >
        <div className="cardBody" style={{ textAlign: "left" }}>
          <FaPalette className={styles.cardIcon} aria-hidden="true" />
          <h3 className={styles.cardTitle}>UI/UX Design</h3>
          <p className={styles.cardText}>
            Heldere interfaces, consistente typografie en micro-interacties die
            vanzelf spreken.
          </p>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="card-spotlight"
        spotlightColor="rgba(148, 190, 255, 0.4)"
      >
        <div className="cardBody" style={{ textAlign: "left" }}>
          <FaMobileAlt className={styles.cardIcon} aria-hidden="true" />
          <h3 className={styles.cardTitle}>App-ontwikkeling</h3>
          <p className={styles.cardText}>
            React Native apps met vloeiende performance en nette
            API-koppelingen.
          </p>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="card-spotlight"
        spotlightColor="rgba(148, 190, 255, 0.4)"
      >
        <div className="cardBody" style={{ textAlign: "left" }}>
          <FaCode className={styles.cardIcon} aria-hidden="true" />
          <h3 className={styles.cardTitle}>Webontwikkeling</h3>
          <p className={styles.cardText}>
            Next.js front-ends, veilige Node-API’s en stabiele databases.
          </p>
        </div>
      </SpotlightCard>
    </div>
  );
}
