import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/madeshalogo.svg";
import styles from "../styles/header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    if (!id) return;

    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);

    // Scroll to top for Home
    if (id === "home") {
      navigate('/');
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // For other sections, navigate to home first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
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
      const headerOffset = document.querySelector(`.${styles.header}`).offsetHeight;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <button 
          onClick={() => handleScroll('home')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
        >
          <img
            src={Logo}
            alt="Madesha Logo"
            width={140}
            height={40}
          />
        </button>
      </div>

      {/* Desktop Navigation */}
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
      <div
        className={`${styles["contact-button"]} ${
          window.location.pathname === "/" ? styles["home-mobile-adjust"] : ""
        }`}
      >
        <Link to="/contactUs" className={styles["contact-btn"]}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className={styles.mobileMenuToggle} 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className={styles["mobile-nav-btn"]}
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <Link 
                to="/contactUs" 
                className={styles["mobile-contact-btn"]}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;