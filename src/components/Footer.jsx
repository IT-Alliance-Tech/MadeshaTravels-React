import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/footer.module.css"; // ✅ import as styles object

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61579286710827&sk=about" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/madesha_tours_travels/" },
    { icon: <FaWhatsapp />, href: "https://wa.me/919980942628" },
  ];

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Services", id: "services" },
        { name: "Discover", id: "discover" },
        { name: "Gallery", id: "gallery" },
        { name: "Reviews", id: "testimonials" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Why Us?", path: "/whyUs" },
        { name: "Partner with us", path: "/partner" },
        { name: "FAQ’s", path: "/faq" },
      ],
    },
  ];

  const contactInfo = [
    "(+91) 9980942628",
    "madeshatourstravels@gmail.com",
    "#1713, Muneshwara Prasanna, Opposite to AD Clasia Apartment, AECS LAYOUT, A BLOCK, Singasandra, Bangalore, 560068",
  ];

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  const handleScroll = (id) => {
    if (!id) return;
    
    // Navigate to home first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const headerOffset = 80;
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
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        {/* Left Section */}
        <div className={styles["footer-left"]}>
          <div className={styles["logo-area"]}>
            <button 
              onClick={() => navigate('/')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <h2 className={styles["footer-brand"]}>Madesha Tour & Travels</h2>
            </button>
          </div>
          <p className={styles["footer-text"]}>
            From breathtaking destinations to unforgettable experiences, we’re here to make every journey safe, simple, and truly memorable.
          </p>
          <div className={styles["social-icons"]}>
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social-link"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Section */}
        <div className={`${styles["footer-links"]} ${styles["company-links"]} ${openSection === "company" ? styles.active : ""}`}>
          <h4 onClick={() => toggleSection("company")}>Company</h4>
          <ul>
            {footerLinks[0].links.map((link, i) => (
              <li key={i}>
                <span onClick={() => handleScroll(link.id)}>{link.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className={`${styles["footer-links"]} ${openSection === "contact" ? styles.active : ""}`}>
          <h4 onClick={() => toggleSection("contact")}>Contact</h4>
          <ul>
            {footerLinks[1].links.map((link, i) => (
              <li key={i}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Meet Us Section */}
        <div className={`${styles["footer-contact"]} ${openSection === "meet" ? styles.active : ""}`}>
          <h4 onClick={() => toggleSection("meet")}>Meet Us</h4>
          {contactInfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      </div>
    </footer>
  );
};

