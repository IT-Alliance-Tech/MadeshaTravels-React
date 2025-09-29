import React, { useState } from "react";
import palaceImg from "../../public/faq.png"; // Make sure this path is correct
import styles from"../styles/faq.module.css"

const faqs = [
  {
    question: "What kind of vehicles do you provide?",
    answer:
      "We provide cars, SUVs, tempo travellers, and buses to suit different travel needs.",
  },
  {
    question: "Can I book vehicles for group travel?",
    answer:
      "Yes, our tempo travellers and buses are perfect for large groups and events.",
  },
  {
    question: "How do I book a vehicle?",
    answer:
      "You can easily book through our website or by contacting our support team.",
  },
  {
    question: "Are your drivers professional?",
    answer:
      "Absolutely, all our drivers are well-trained, experienced, and professional.",
  },
  {
    question: "Do you provide one-way or round-trip services?",
    answer: "Yes, we offer both one-way and round-trip travel options.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    console.log(index,activeIndex)
  };

  return (
    <section className={styles.faqSection}>
      {/* Header */}
      <div className={styles.faqHeader}>
        <p className={styles.faqSmallHeading}>FAQ'S</p>
        <h2 className={styles.faqHeading}>Got Questions? We’ve Got Answers</h2>
      </div>

      {/* Container */}
      <div className={styles.faqContainer}>
        {/* Left: Image */}
        <div className={styles.faqImage}>
          <img src={palaceImg} alt="Travel Palace" className={styles.imageBox} />
        </div>

        {/* Right: FAQ List */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem } ${activeIndex === index ? styles.active: ""}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}

              >
                {faq.question}
                <span className={styles.arrow}>▼</span>
              </button>

              {activeIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
