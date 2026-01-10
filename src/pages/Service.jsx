import { useState, useRef } from "react";
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
    <div className="service-wrapper">
      {/* IMAGE SECTION */}
      <div className="service-image-box">
        <img
          src={services[currentIndex].image}
          alt="Service Visual"
        />
      </div>

      {/* SLIDER SECTION */}
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
  );
}
