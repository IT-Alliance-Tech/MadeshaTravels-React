import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/servicesSection.module.css";

// ✅ Import images from src/assets (NOT public)
import busImg from "../../public/bus.png";
import carImg from "../../public/car.png";
import tempoImg from "../../public/tempo.png";

export default function ServicesSection() {
  const navigate = useNavigate();

  // Array of services
  const services = [
    {
      id: 1,
      title: "Bus Services",
      description:
        "Budget-friendly connectivity with extensive networks reaching even remote towns.",
      img: busImg,
      link: "bus",
    },
    {
      id: 2,
      title: "Car Services",
      description:
        "Premium car rental services with professional drivers for business, travel, and personal needs.",
      img: carImg,
      link: "car-service",
    },
    {
      id: 3,
      title: "Tempo Traveller Services",
      description:
        "Comfortable and reliable Tempo Traveller rentals for group trips, office outings, and family tours.",
      img: tempoImg,
      link: "tempo",
    },
  ];

  // Handle card click
  const handleClick = (link) => {
    navigate(`/servicedetails?service=${link}`);
  };

  return (
    <section id="services" className={styles.servicesSection}>
      {/* Left Content */}
      <div className={styles.textContent}>
        <p className={styles.smallHeading}>SERVICES</p>
        <h2 className={styles.mainHeading}>
          Our top value <br /> categories for you
        </h2>
      </div>

      {/* Cards Wrapper */}
      <div className={styles.cardsWrapper}>
        {services.map((service) => (
          <div
            key={service.id}
            className={styles.card}
            onClick={() => handleClick(service.link)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={service.img}
              alt={service.title}
              className={styles.cardImg}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
