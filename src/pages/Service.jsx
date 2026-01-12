import { useState } from "react";
import { motion } from "framer-motion";
import "./Pages.css";

export default function ServiceSlider() {
  const services = [
    {
      title: "Home Loans",
      desc: "We offer simple, low-interest home loans with fast approvals and minimal paperwork.",
      image: "/images/homeloans.png",
    },
    {
      title: "Personal Loans",
      desc: "We offer quick, flexible personal loans with instant approval and hassle-free processing.",
      image: "/images/personalloans.png",
    },
    {
      title: "Loan Against Property",
      desc: "High value funding with flexible repayment options.",
      image: "/images/loanagainstproperty.png",
    },
    {
      title: "Mortgage Loan",
      desc: "Secure mortgage loans with competitive rates.",
      image: "/images/mortgage.png",
    },
    {
      title: "Balance Transfer",
      desc: "Switch to lower interest rates easily.",
      image: "/images/balancetransfer.png",
    },
    {
      title: "ITR Filing",
      desc: "Fast & secure income tax filing services.",
      image: "/images/itrfiling.png",
    },
  ];

  const CARD_WIDTH = 260;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* ================= SERVICES SLIDER ================= */}
      <div className="service-wrapper">
        {/* STATIC IMAGE */}
        <div className="service-image-box">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
          />
        </div>

        {/* SLIDER */}
        <div className="service-slider-area">
          <div className="service-slider-controls">
            <button className="service-arrow" onClick={prevSlide}>←</button>
            <button className="service-arrow" onClick={nextSlide}>→</button>
          </div>

          <div className="service-slider">
            <div
              className="service-slider-track"
              style={{
                transform: `translateX(-${currentIndex * CARD_WIDTH}px)`
              }}
            >
              {services.map((item, i) => (
                <div
                  key={i}
                  className={`service-card ${
                    i === currentIndex ? "active" : ""
                  }`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#">Read More →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-section">
        <div className="why-choose-header">
          <div className="why-choose-left">
            <motion.span
              className="section-tag"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why choose us <span className="highlight-trust">?</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why You Should Choose Our <br /> Home Loan Services
            </motion.h2>
          </div>

          <div className="why-choose-right">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              At T-Home, we are redefining how people find, design, and secure
            their dream homes. With a customer-first approach, we bring
            together real estate expertise, modern interiors, and reliable
            property services under one roof.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="why-choose-image"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src="/images/team.jpg" alt="Our Team" />
        </motion.div>
      </section>
    </>
  );
}
