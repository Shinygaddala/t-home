import { useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Pages.css";

export default function ServiceSlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      desc: "We provide loan against property with high value funding, low interest rates, and flexible repayment options.",
      image: "/images/loanagainstproperty.png",
    },
    {
      title: "Mortgage Loan",
      desc: "We offer secure mortgage loans with competitive rates and flexible repayment terms.",
      image: "/images/mortgage.png",
    },
    {
      title: "Balance Transfer",
      desc: "We help you switch your loan to lower interest rates with easy and hassle-free balance transfer.",
      image: "/images/balancetransfer.png",
    },
    {
      title: "ITR Filing",
      desc: "Digital banking solution enabling SMEs to manage finance and real-time reporting.",
      image: "/images/itrfiling.png",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {/* ================= SERVICES SLIDER ================= */}
      <div className="service-wrapper">
        <div className="service-image-box">
          <img
            src={services[currentIndex].image}
            alt="Service Visual"
          />
        </div>

        <div className="service-slider-area">
          <div className="service-slider-controls">
            <button className="service-arrow" onClick={prevSlide}>←</button>
            <button className="service-arrow" onClick={nextSlide}>→</button>
          </div>

          <div className="service-slider">
            <div
              className="service-slider-track"
              style={{ transform: `translateX(-${currentIndex * 220}px)` }}
              ref={sliderRef}
            >
              {services.map((item, i) => (
                <div className="service-card" key={i}>
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Why choose us <span className="highlight-trust">?</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              Why You Should Choose Our <br /> Home Loan Services
            </motion.h2>
          </div>

          <div className="why-choose-right">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              At T-Home, we make your home loan journey simple and stress-free
              with personalized plans, low interest rates, and quick approvals.
              Our transparent process ensures minimal paperwork and no hidden
              charges, while our team supports you every step of the way—helping
              you move into your dream home with ease and confidence.
            </motion.p>
          </div>

        </div>

        <motion.div
          className="why-choose-image"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src="/images/team.jpg" alt="Our Team" />
        </motion.div>
      </section>
    </>
  );
}
