import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/madeshalogo.svg"; // check path
import styles from "../styles/header.module.css";

// Nav links configuration
const navLinks = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Discover", id: "discover" },
  { name: "Gallery", id: "gallery" },
  { name: "Testimonials", id: "testimonials" },
];

const Header = () => {
  const handleScroll = (id) => {
    if (!id) return;

    // Scroll to top for Home
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      // Adjust offset depending on header height
      const headerOffset = document.querySelector(`.${styles.header}`).offsetHeight;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img
            src={Logo}
            alt="Madesha Logo"
            width={140}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(link.id)}
                className={styles["nav-btn"]}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact button */}
      <div className={styles["contact-button"]}>
        <Link to="/contactUs" className={styles["contact-btn"]}>
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
