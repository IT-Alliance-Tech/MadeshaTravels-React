import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/madeshalogo.svg"; // check path
import styles from "../styles/header.module.css";

// Nav links configuration
const navLinks = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Discover", id: "discover" },
  { name: "Gallery", id: "gallery" },
  { name: "Reviews", id: "testimonials" },
];

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (!id) return;

    // Scroll to top for Home
    if (id === "home") {
      // Navigate to home page first, then scroll to top
      navigate('/');
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // For other sections, navigate to home first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const headerOffset = document.querySelector(`.${styles.header}`).offsetHeight;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
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
        <button onClick={() => handleScroll('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img
            src={Logo}
            alt="Madesha Logo"
            width={140}
            height={40}
            className="cursor-pointer"
          />
        </button>
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
