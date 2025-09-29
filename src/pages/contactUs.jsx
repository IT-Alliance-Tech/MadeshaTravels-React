import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "../styles/contactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Build FormData instead of JSON (no CORS preflight)
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("message", formData.message);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxRdevDCDN-65c3UERlyegPXyQ18muqfisDhGX4vlt74N4lrKFoKhRBYHoPY6YhZilUPA/exec",
        {
          method: "POST",
          body: form, // 👈 No headers → avoids preflight → no CORS error
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left Info */}
        <div className={styles.left}>
          <h5 className={styles.subTitle}>GET IN TOUCH WITH US</h5>
          <h2 className={styles.title}>
            For More Information About Our <br />
            Services. Please Feel Free To Drop <br />
            Us An Email. Do Not Hesitate!
          </h2>

          <div className={styles.infoBox}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin />
              </div>
              <div>
                <h4 className={styles.infoHeading}>Address</h4>
                <p>
                  #711, Muneswhara Prasanna, <br />
                  Opposite to AD Classic Apartment, <br />
                  AECS Layout A-Block, <br />
                  Singasandra, Bangalore, 560068
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone />
              </div>
              <div>
                <h4 className={styles.infoHeading}>Phone</h4>
                <p>
                  Mobile 1: (+91) 99809 42628 <br />
                  Mobile 2: (+91) 96328 39345
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail />
              </div>
              <div>
                <h4 className={styles.infoHeading}>Email</h4>
                <p>modetraboutourstravels@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Abc"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Abc@def.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="This is optional"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Hi I’d like to ask about"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {status && <p className="mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
