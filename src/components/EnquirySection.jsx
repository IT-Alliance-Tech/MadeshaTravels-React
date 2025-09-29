"use client";

import React, { useState } from "react";
import styles from "../styles/enquirySection.module.css";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: null,
    message: null,
    email: null,
    phone: null,
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [status, setStatus] = useState("");

  // const handleSubmit = async (e) => {
  //   // e.preventDefault();

  //   // // Start loading
  //   // setLoading(true);

  //   // const formDataToSend = new FormData();
  //   // formDataToSend.append("name", formData.name);
  //   // formDataToSend.append("phone", formData.phone);
  //   // formDataToSend.append("email", formData.email);
  //   // formDataToSend.append("message", formData.message);

  //   // try {
  //   //   const response = await fetch(
  //   //     "https://script.google.com/macros/s/AKfycbxJpcSgmsC3pfFKiMlGVSJR8XUCT9osXF7i98Q3Xn03nfUC9Yp2UjYABj7fmgsm6VA/exec",
  //   //     {
  //   //       method: "POST",
  //   //       body: formDataToSend,
  //   //     }
  //   //   );

  //   //   if (!response.ok) throw new Error("Network response was not ok");

  //   //   // Wait for 3 seconds before clearing
  //   //   setTimeout(() => {
  //   //     alert("Enquiry submitted successfully!");
  //   //     setFormData({
  //   //       name: "",
  //   //       message: "",
  //   //       email: "",
  //   //       phone: "",
  //   //     });
  //   //     setLoading(false);
  //   //   }, 3000);
  //   // } catch (error) {
  //   //   console.error("Fetch error:", error);
  //   //   alert("Something went wrong!");
  //   //   setLoading(false);
  //   // }

  //   e.preventDefault();
  //   setStatus("Submitting...");

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const result = await response.json();

  //     if (result.status === "success") {
  //       setStatus("Message sent successfully!");
  //       setFormData({ name: "", email: "", phone: "", message: "" });
  //     } else {
  //       setStatus("Something went wrong.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setStatus("Error submitting form.");
  //   }
  // };


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


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  return (
    <section className={styles.enquirySection}>
      <div className={styles.formCard}>
        <h3 className={styles.formTitle}>ENQUIRY</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            disabled={loading} // Disable during loading
            required
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            disabled={loading}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            disabled={loading}
            required
          />
          <textarea
            placeholder={`Hello, I am interested in booking a\nhotel....`}
            className={styles.textarea}
            onChange={handleChange}
            name="message"
            value={formData.message}
            disabled={loading}
          ></textarea>
          <p className={styles.terms}>
            {/* By submitting this form I agree to <a href="#">Terms of Use</a> */}
          </p>
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading} // Disable button during loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {status && <p className="mt-4">{status}</p>}
        </form>
      </div>

      <div className={styles.textContent}>
        <h5 className={styles.smallHeading} style={{ textAlign: "right" }}>
          ENQUIRE NOW
        </h5>
        <h2 className={styles.mainHeading} style={{ textAlign: "right" }}>
          Register now to get
          <br />
          <span className={styles.indentedLine}>started with ease.</span>
        </h2>
      </div>
    </section>
  );
}
