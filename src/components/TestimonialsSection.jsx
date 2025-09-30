import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

import styles from "../styles/testimonialsSection.module.css";

const happyCustomers = [
  {
    name: "Smitha",
    role: "Travel Enthusiast",
    review:
      "Our Kerala backwaters trip was absolutely breathtaking. The houseboat stay was so peaceful, and everything was perfectly arranged by Madesha Tour and Travels.",
  },
  {
    name: "Rahul",
    role: "Photographer",
    review:
      "Thanks to Madesha Tour and Travels, we finally visited Kashmir! The snow in Gulmarg and the hospitality were unforgettable. A truly hassle-free trip.",
  },
  {
    name: "Anita",
    role: "Designer",
    review:
      "Our trip to Himachal Pradesh was a dream come true. Trekking in Manali and camping in Kasol were highlights. Everything was well managed by Madesha Tour and Travels",
  },
  {
    name: "Chaya",
    role: "Dancer",
    review:
      "We went to Andaman for our anniversary, and the beach resort was amazing. Scuba diving was once-in-a-lifetime! A big thank you to Madesha Tour and Travels for the smooth planning.",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prevCustomer = () => {
    setCurrent((prev) => (prev === 0 ? happyCustomers.length - 1 : prev - 1));
  };

  const nextCustomer = () => {
    setCurrent((prev) => (prev === happyCustomers.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCustomer();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.title}>What Our Clients Say</h2>

      <div className={`${styles["testimonial-content"]} ${styles.fade}`}>
        <div className={styles["quote-icon"]}>
          <FaQuoteLeft />
        </div>

        <p className={styles.review}>"{happyCustomers[current].review}"</p>

        <div className={styles["client-info"]}>
          <h3 className={styles.name}>{happyCustomers[current].name}</h3>
          <p className={styles.role}>{happyCustomers[current].role}</p>
        </div>

        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#fbbf24" />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevCustomer}>
        ←
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextCustomer}>
        →
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {happyCustomers.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
