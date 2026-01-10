import { Link } from "react-router-dom";
import "./Pages.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO */}
      <div className="hero-img">
        <img src="/images/hero.jpeg" alt="Hero" />
        <div className="hero-text">
          <h1>
            Welcome to <span className="brand">T-HOME</span>
          </h1>
          <p>Plan and Make your future with Us</p>
          <Link to="/login" className="button-link">
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      {/* TRUST IMAGE */}
      <div className="Trust-img">
        <img src="/images/trust.jpeg" alt="Trust" />
      </div>

      {/* ================= WHY TRUST US SECTION ================= */}
      <section className="why-trust-section">
        <div className="why-trust-container">

          {/* LEFT CONTENT */}
          <div className="why-trust-text">
            <span className="section-label">About us</span>

            <h2>
              Why Thousands Trust Us <br />
              for Their Home Loans?
            </h2>

            <p>
              At T-Home, we are redefining how people find, design, and secure
              their dream homes. With a customer-first approach, we bring
              together real estate expertise, modern interiors, and reliable
              property services under one roof.
            </p>

            <ul className="trust-points">
              <li>Personalized Loan Plans</li>
              <li>Lowest Interest Rates</li>
              <li>Minimal Documentation</li>
              <li>Expert Assistance</li>
            </ul>

            <Link to="/about" className="learn-more-link"><button className="learn-more-btn">Learn More</button></Link>

          </div>

          {/* RIGHT IMAGE */}
          <div className="why-trust-image">
            <img src="/images/why-trust.jpeg" alt="Why Trust Us" />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-section">
        <div className="why-choose-header">
          <div className="why-choose-left">
            <span className="section-tag">Why choose us</span>
            <h2>Why You Should Choose Our <br />Home Loan Services</h2>
          </div>
          <div className="why-choose-right">
            <p>
              At T-Home, we make your home loan journey simple and stress-free
              with personalized plans, low interest rates, and quick approvals.
              Our transparent process ensures minimal paperwork and no hidden
              charges, while our team supports you every step of the way—helping
              you move into your dream home with ease and confidence.
            </p>
          </div>
        </div>
        <div className="why-choose-image"><img src="/images/team.jpg" alt="Our Team" /></div>
      </section>
      
      
      {/* ================= HOW IT WORKS ================= */}
      <section className="process-section">
        {/* HEADER */}
        <div className="process-header">
          <h4>- Our Process -</h4>
          <h2>How it works</h2>
          <p>Simple & Hassle-Free Home Loan Process</p>
        </div>
        
        {/* STEPS */}
        <div className="process-steps">
          <div className="process-step">
            <img src="/images/upload.png" alt="Upload Documents" />
            <h3>Upload Documents</h3>
            <p>Submit ID, income & property proofs.</p>
            <span className="step-number">1</span>
          </div>

          <div className="process-step">
            <img src="/images/check.png" alt="Check Eligibility" />
            <h3>Check Eligibility</h3>
            <p>Submit ID, income & property proofs.</p>
            <span className="step-number">2</span>
          </div>

          <div className="process-step">
            <img src="/images/offer.png" alt="Get Offer" />
            <h3>Get Offer</h3>
            <p>Know your loan options instantly.</p>
            <span className="step-number">3</span>
          </div>

          <div className="process-step">
            <img src="/images/approval.png" alt="Quick Approval" />
            <h3>Quick Approval</h3>
            <p>Fast, hassle-free verification.</p>
            <span className="step-number">4</span>
          </div>

          <div className="process-step">
            <img src="/images/disbursement.png" alt="Instant Disbursement" />
            <h3>Instant Disbursement</h3>
            <p>Get funds directly in your account.</p>
            <span className="step-number">5</span>
          </div>

        </div>
      </section>



    </div>
  );
}
