import React from "react";
import styles from "../styles/heroSection.module.css";
import { FaSuitcase, FaArrowRight, FaUserPlus, FaPaperPlane } from "react-icons/fa";

// Images (place them in src/assets or similar)
import hillImg from "../../public/hero1.png";
import gatewayImg from "../../public/hero2.png";
import tajmahalImg from "../../public/nature1.png";

export default function HeroSection() {
  return (
    <section id="top-destination" className={styles.hero}>
      {/* Left Side */}
      <div className={styles.left}>
        {/* Branding Heading */}
        <h2 className={styles.branding}>Mahadesha Tours and Travelers</h2>

        {/* Explore Button */}
        <button className={styles.exploreBtn}>
          Explore Ultimate India!
          <FaSuitcase />
        </button>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          <span className={styles.travel}>Travel</span>{" "}
          <span className={styles.top}>top</span>{" "}
          <span className={styles.destination}>destination</span>{" "}
          <span className={styles.india}>of India</span>
        </h1>

        <p>
          We always make our customer happy by providing as many choices as
          possible
        </p>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.imageLayout}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.imgCard}>
              <img src={hillImg} alt="Hill Station" />
              <div className={styles.iconOverlay}>
                <FaPaperPlane />
              </div>
            </div>
            <div className={styles.imgCard}>
              <img src={tajmahalImg} alt="Taj Mahal" />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol}>
            <div className={styles.imgCardTall}>
              <img src={gatewayImg} alt="Gateway of India" />
              <span className={styles.badge}>Top Places</span>
            </div>
            <FaUserPlus />
          </div>
        </div>
      </div>
    </section>
  );
}
