import { useEffect, useState } from "react";
import "../pages/Pages.css";

const Popup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="trust-popup-overlay">
      <div className="trust-popup">

        {/* Logo circle */}
        <div className="trust-logo">
          <img src="/images/logo.jpeg" alt="logo" />
        </div>

        <button
          className="trust-close"
          onClick={() => setVisible(false)}
        >
          ×
        </button>

        {/* Image section */}
        <div className="trust-image"></div>

        {/* Stats */}
        <div className="trust-stats">
          <div className="trust-item">
            <h2>5k+</h2>
            <p>SATISFIED CLIENTS</p>
          </div>

          <div className="trust-item">
            <h2>95%</h2>
            <p>SUCCESS RATE</p>
          </div>

          <div className="trust-item">
            <h2>10+</h2>
            <p>YEARS EXPERIENCE</p>
          </div>

          <div className="trust-item">
            <h2>100%</h2>
            <p>TRUSTED</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;
