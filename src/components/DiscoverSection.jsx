import React, { useRef } from "react";
import styles from "../styles/discoverSection.module.css";

import munnarImg from "../../public/hero1.png";
import kedarnathImg from "../../public/hero2.png";
import keralaImg from "../../public/des5.png";
import goaImg from "../../public/des1.png";
import ladakhImg from "../../public/des.png";
import rajasthanImg from "../../public/des3.png";

const destinationCards = [
  { img: munnarImg, name: "Murudeshwara" },
  { img: kedarnathImg, name: "Dharmasthala" },
  { img: keralaImg, name: "Mysore" },
  { img: goaImg, name: "Gokarna" },
  { img: ladakhImg, name: "Udupi" },
  { img: rajasthanImg, name: "Chikmagalur" },
];

export default function DiscoverSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320 * 3, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320 * 3, behavior: "smooth" });
    }
  };

  return (
    <section id="discover" className={styles.destinationSection}>
      {/* Header */}
      <div className={styles.header}>
        {/* Left Side: Heading */}
        <div className={styles.headerLeft}>
          <p className={styles.smallHeading}>Top Destination</p>
          <h2 className={styles.mainHeading}>Explore top destination</h2>
        </div>

        {/* Right Side: Arrows */}
        <div className={styles.arrows}>
          <button onClick={scrollLeft} className={styles.arrowBtn}>
            ←
          </button>
          <button onClick={scrollRight} className={styles.arrowBtnActive}>
            →
          </button>
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className={styles.cardsWrapper} ref={scrollRef}>
        {destinationCards.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.img}
              alt={item.name}
              className={styles.cardImg}
            />
            <div className={styles.cardContent}>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
