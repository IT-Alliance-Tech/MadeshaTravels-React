"use client";

import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import tempoImg from "../../public/tempo2.png";
import busImg from "../../public/buss.png";
import carImg from "../../public/car11.png";
import styles from "../styles/serviceDetails.module.css";

export default function ServiceDetails() {
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

  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  const [busCurrent, setBusCurrent] = useState("bus21_25");

  let content;
  if (serviceParam === "bus") {
    content = serviceData[busCurrent];
  } else if (serviceParam === "car-service") {
    content = serviceData["car-service"];
  } else {
    content = serviceData["tempo"];
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.serviceDetails} ${serviceParam === "car-service" ? styles.carService : ""
          }`}
      >
        <div className={styles.imageSection}>
          <img
            src={content.image}
            alt={content.title}
            width={696}
            height={697}
          />
        </div>

        <div className={styles.contentSection}>
          <h4 className={styles.subheading}>{content.title}</h4>
          <h2 className={styles.heading}>{content.heading}</h2>

          {content?.buses ? (
            content?.buses?.map((bus, idx) => (
              <div key={idx} className={styles.busBlock}>
                <h3>{bus.name}</h3>
                <p>{bus.desc}</p>
                <ul className={styles.list}>
                  {bus.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ol className={styles.list}>
              {content?.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ol>
          )}

          {serviceParam === "bus" && (
            <div className={styles.busButtons}>
              <button
                className={`${styles.busBtn} ${busCurrent === "bus21_25" ? styles.purpleBtn : styles.whiteBtn
                  }`}
                onClick={() => setBusCurrent("bus21_25")}
              >
                21 to 25 Seater
              </button>
              <button
                className={`${styles.busBtn} ${busCurrent === "bus30_35" ? styles.purpleBtn : styles.whiteBtn
                  }`}
                onClick={() => setBusCurrent("bus30_35")}
              >
                30 to 35 Seater
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const serviceData = {
  tempo: {
    title: "Tempo Traveller Services",
    heading: (
      <>
        Our 13+1 Seater Tempo <br />
        Traveller is perfect for <br />
        small groups and <br />
        family trips.
      </>
    ),
    image: tempoImg,
    points: [
      "Enjoy Non-AC rides or AC rides.",
      "A minimum of 300 km per day is required.",
      "Driver Bata is ₹500/day (from 6:00 AM to 10:00 PM).",
      "If travel extends before 6:00 AM or after 10:00 PM, an extra driver bata of ₹700 will be applicable.",
      "Road toll and parking charges are additional.",
    ],
  },
  "car-service": {
    title: "Car Service",
    heading: (
      <>
        Our 6+1 and 4+1 Seater cars <br />
        are perfect for small groups, <br />
        couples, or family trips.
      </>
    ),
    image: carImg,
    points: [
      "AC and Non-AC rides available.",
      "Minimum distance: 300 km per day.",
      "Driver Bata: ₹500/day (from 6:00 AM to 10:00 PM).",
      "Extended hours: If travel extends before 6:00 AM or after 10:00 PM, an extra driver bata of ₹700 applies.",
      "Additional charges: Road toll and parking charges extra.",
    ],
  },
  bus21_25: {
    title: "Bus Service",
    heading:
      "Choose from 21 to 25-seater buses, AC or Non-AC, perfect for group trips, events, and corporate travel.",
    image: busImg,
    buses: [
      {
        name: "21 Seater",
        desc: "A great option for smaller groups, the 21-Seater Bus offers comfort and affordability.",
        points: ["Non-AC and AC.", "Driver Bata: ₹700/day."],
      },
      {
        name: "25 Seater",
        desc: "Perfect for school trips or small functions, the 25-Seater Bus ensures a smooth ride.",
        points: ["Non-AC and AC.", "Driver Bata: ₹700/day."],
      },
    ],
  },
  bus30_35: {
    title: "Bus Service",
    heading:
      "Choose from 30 to 35-seater buses, AC or Non-AC, perfect for medium group outings and events.",
    image: busImg,
    buses: [
      {
        name: "Mini Bus - 30 Seater",
        desc: "Our 30-Seater Mini Bus is ideal for medium-sized groups and corporate outings.",
        points: ["Non-AC and AC.", "Driver Bata: ₹700/day."],
      },
      {
        name: "33 Seater",
        desc: "Spacious and reliable, the 33-Seater Bus is suitable for weddings, tours, and events.",
        points: ["Non-AC and AC.", "Driver Bata: ₹700/day."],
      },
      {
        name: "50 Seater",
        desc: "For large gatherings and group travel, our 50-Seater Bus is the best choice.",
        points: ["Non-AC and AC.", "Driver Bata: ₹1000/day."],
      },
    ],
  },
};
