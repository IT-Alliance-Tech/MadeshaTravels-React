import React, { useEffect } from "react";
import styles from "../styles/partner.module.css";

// ✅ Import images from assets folder (not public in React)
import hillImg from "../../public/partner1.png";
import gatewayImg from "../../public/partner3.png";
import tajmahalImg from "../../public/partner2.png";
import { useLocation } from "react-router-dom";

export default function PartnerSection() {
  const features = {
    title:
      "Looking for a dependable transport partner? We provide Car, Bus, and Tempo Traveller services for:",
    keyFeatures: [
      "Corporate Transfers: Office trips, employee transport, and business travel.",
      "Event Travel: Weddings, functions, and group gatherings with hassle-free transport.",
      "School & College Trips: Safe and reliable buses & tempo travellers for educational tours.",
      "Tour Operators: Partner with us for group tours and package inclusions.",
    ],
  };
    const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 0);
  }, [pathname]);

  return (
    <section className={styles.hero}>
      {/* Left Side */}
      <div className={styles.left}>
        <p className={styles.subHeading}>Partner With Us</p>
        <h1>Grow Together with Madesha Tours & Travels</h1>
        <p style={{ textAlign: "start" }}>{features.title}</p>
        <ul>
          {features.keyFeatures.map((item, index) => (
            <li style={{ textAlign: "start" }} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.imageLayout}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <div className={styles.imgCard}>
              <img src={hillImg} alt="Hill Station" className={styles.image} />
            </div>
            <div className={styles.imgCard}>
              <img src={tajmahalImg} alt="Taj Mahal" className={styles.image} />
            </div>
          </div>

          {/* Right column */}
          <div className={styles.rightCol}>
            <div className={styles.imgCardTall}>
              <img
                src={gatewayImg}
                alt="Gateway of India"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
