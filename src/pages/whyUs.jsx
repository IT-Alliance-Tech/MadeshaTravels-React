import React from "react";
import styles from "../styles/whyUs.module.css";
import hampiImg from "../../public/hampi.png"; // ✅ put hampi.png inside src/assets/

const whyUsPoints = [
  {
    title: "Trusted Experience",
    desc: "Years of expertise in delivering safe and reliable travel solutions.",
  },
  {
    title: "Comfort & Safety",
    desc: "Well-maintained vehicles with professional drivers.",
  },
  {
    title: "24/7 Support",
    desc: "Always available to assist with bookings, queries, and emergencies.",
  },
  {
    title: "Custom Packages",
    desc: "Flexible travel options tailored to your needs—corporate, family, or solo.",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent rates with no hidden costs.",
  },
  {
    title: "Pan-India Service",
    desc: "Seamless travel experiences across major cities and destinations.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.whyUsSection}>
      {/* Left Image */}
      <div className={styles.imageContainer}>
        <img src={hampiImg} alt="Hampi Chariot" className={styles.image} />
      </div>

      {/* Right Content */}
      <div className={styles.content}>
        <p className={styles.subtitle}>WHY US?</p>
        <h2 className={styles.heading}>
          Your Journey, our <span className={styles.break}>Commitment</span>
        </h2>

        <ol className={styles.list}>
          {whyUsPoints.map((point, index) => (
            <li key={index} className={styles.listItem}>
              <div>
                {point.title}:{" "}
                <span className={styles.points}>{point.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
