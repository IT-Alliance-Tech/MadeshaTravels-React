import React from "react";
import img1 from "../../public/gallery1.png";
import img2 from "../../public/g1.png";
import img3 from "../../public/gallery3.png";
import img4 from "../../public/bus2.png";
import styles from "../styles/gallerySection.module.css"; // CSS module

const galleryImages = [
  { id: 1, src: img1, alt: "First", className: "img1" },
  { id: 2, src: img2, alt: "Second", className: "img2" },
  { id: 3, src: img3, alt: "Third", className: "img3" },
  { id: 4, src: img4, alt: "Fourth", className: "img4" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      {/* Header */}
      <div className={styles["gallery-header"]}>
        <p className={styles["gallery-subtitle"]}>OUR GALLERY</p>
        <h2 className={styles["gallery-title"]}>
          Discover the Beauty <br /> We’ve Seen
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className={styles["gallery-grid"]}>
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`${styles["gallery-item"]} ${styles[img.className]}`}
          >
            <img src={img.src} alt={img.alt} />
            {/* Optional overlay text */}
            <div className={styles["overlay"]}>{img.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
