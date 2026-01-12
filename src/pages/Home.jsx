import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import "./Pages.css";


export default function Home() {

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 4000); // 4 sec per slide

    return () => clearInterval(interval);
  }, []);

  /* LETTER ANIMATION CONFIG */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const headingText = "Welcome to ";
  const brandText = "T-HOME";
  const slideContent = [
    {
      heading: "Welcome to ",
      brand: "T-HOME",
      subtext: "Plan and Make your future with Us",
    },
    {
      heading: "Your Trusted Partner for",
      brand: " Loans",
      subtext: "Helping Families, Individuals and businesses with Home Loans for nearly 20 years",
    },
    {
      heading: "",
      brand: "",
      subtext: "At T-HOME , we take the complexity out of Home loans",
    },
  ];
  

  return (
    <>
    <div className="home-container">

      <div className="hero-img">

        {/* SLIDE 1 – VIDEO */}
        {activeSlide === 0 && (
          <motion.div
            className="hero-video-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video
              src="/images/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
            />
          </motion.div>
        )}

        {/* SLIDE 2 – IMAGE */}
        {activeSlide === 1 && (
          <motion.div
            className="hero-image"
            style={{ backgroundImage: "url('/images/slide1.jpeg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {/* SLIDE 3 – IMAGE */}
        {activeSlide === 2 && (
          <motion.div
            className="hero-image"
            style={{ backgroundImage: "url('/images/slide2.jpeg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {/* OVERLAY */}
        <div className="hero-overlay" />

  
        {/* TEXT (CHANGES PER SLIDE) */}
<div className="hero-text">
  <motion.h1
    key={`heading-${activeSlide}`}
    variants={container}
    initial="hidden"
    animate="visible"
    className="hero-heading"
  >
    {slideContent[activeSlide].heading.split("").map((char, index) => (
      <motion.span key={index} variants={letter}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}

    <span className="brand">
      {slideContent[activeSlide].brand.split("").map((char, index) => (
        <motion.span key={`brand-${index}`} variants={letter}>
          {char}
        </motion.span>
      ))}
    </span>
  </motion.h1>

  <motion.p
    key={`sub-${activeSlide}`}
    className="hero-subtext"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {slideContent[activeSlide].subtext}
  </motion.p>

  <Link to="/login">
    <button className="hero-btn">Get Started</button>
  </Link>
</div>

        

      </div>
    </div>
    <section className="trust-section">
      <h2 className="trust-title">Oficially Recognized. Nationally Trusted</h2>
      <div className="trust-img">
        <img src="/images/trust.jpeg" alt="Trust" />
      </div> 
    </section>


      {/* ================= WHY TRUST US SECTION ================= */}
      <section className="why-trust-section">
        <div className="why-trust-container">
          <motion.div
            className="why-trust-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
           About us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Why Thousands Trust Us <br />
            for Their Home Loans?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            At T-Home, we are redefining how people find, design, and secure
            their dream homes. With a customer-first approach, we bring
            together real estate expertise, modern interiors, and reliable
            property services under one roof.
          </motion.p>

          <motion.ul
            className="trust-points"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {[
          "Personalized Loan Plans",
          "Lowest Interest Rates",
          "Minimal Documentation",
          "Expert Assistance",
        ].map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4 },
              },
            }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link to="/about" className="learn-more-link">
          <button className="learn-more-btn">Learn More</button>
        </Link>
      </motion.div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="why-trust-image"
      initial={{ opacity: 0, scale: 1.05, borderRadius: "40px" }}
      whileInView={{
        opacity: 1,
        scale: 1,
        borderRadius: "0px",
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      viewport={{ amount: 0.4 }}
      style={{ overflow: "hidden" }}
    >
      <img src="/images/why-trust.jpeg" alt="Why Trust Us" />
    </motion.div>

  </div>
</section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-section">
        <div className="why-choose-header">
          <div className="why-choose-left">
            <motion.span
              className="section-tag"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.6 }}
            >
              Why choose us <span className="highlight-trust">?</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              viewport={{ amount: 0.6 }}
            >
              Why You Should Choose Our <br />Home Loan Services
            </motion.h2>
          </div>

          <div className="why-choose-right">
            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ amount: 0.6 }}
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
          viewport={{ amount: 0.5 }}
        >
          <img src="/images/team.jpg" alt="Our Team" />
        </motion.div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="process-section">
        <div className="process-header">
          <motion.h4
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.6 }}
          >
            - Our Process -
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ amount: 0.6 }}
          >
            How it works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.6 }}
          >
            Simple & Hassle-Free Home Loan Process
          </motion.p>
        </div>

        <div className="process-steps">
          {/* STEP 1 */}
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.4 }}
          >
            <div className="process-icon">
            <img 
             src="https://www.svgrepo.com/show/525572/upload.svg"
             alt="Upload Documents"
             width="50"
             height="50"
            />

            </div>
            <h3>Upload Documents</h3>
            <p>Submit ID, income & property proofs.</p>
            <span className="step-number">1</span>
          </motion.div>

          {/* STEP 2 */}
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ amount: 0.4 }}
          >
            <div className="process-icon">
            <span className="step-number">2</span>
            <img
              src="https://www.svgrepo.com/show/532764/file-check-alt-1.svg"
              alt="Check"
              width="50"
              height="50"
            />

            </div>
            
            <h3>Check Eligibility</h3>
            <p>Submit ID, income & property proofs.</p>
            <span className="step-number">2</span>
            
            
          </motion.div>

          {/* STEP 3 (CENTER – NO SLIDE) */}
          <motion.div
            className="process-step"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ amount: 0.4 }}
          >
            <div className="process-icon">
            <img
              src="https://www.svgrepo.com/show/447981/documents.svg"
              alt="Offer"
              width="50"
              height="50"
            />

            </div>
            <h3>Get Offer</h3>
            <p>Know your loan options instantly.</p>
            <span className="step-number">3</span>
          </motion.div>

          {/* STEP 4 */}  
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ amount: 0.4 }}
          >
            <div className="process-icon">
            <img
              src="https://www.svgrepo.com/show/308400/approval-notice-notice-of-approval-get-approved.svg"
              alt="Approval"
              width="50"
              height="50"
            />

            </div>
            <h3>Quick Approval</h3>
            <p>Fast, hassle-free verification.</p>
            <span className="step-number">4</span>
          </motion.div>

          {/* STEP 5 */}
          <motion.div
            className="process-step"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.4 }}
          >
            <div className="process-icon">
            <img
              src="https://www.svgrepo.com/show/522611/money-2.svg"
              alt="Money"
              width="50"
              height="50"
            />

            </div>
            <h3>Instant Disbursement</h3>
            <p>Get funds directly in your account.</p>
            <span className="step-number">5</span>
          </motion.div>
        </div>
      </section>
      {/* Testinomials */}
  

      <section className="cards-section">
  <div className="cards-container">

    {/* CARD 1 – LEFT → RIGHT */}
    <motion.div
      className="info-card"
      initial={{ opacity: 0, x: -80, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
    

      {/* IMAGE */}
      <div className="card-image">
        <img src="/images/card1.jpg" alt="Murugan R" />
      </div>

      

      <h3>Murugan R</h3>
      <span>Hyderabad</span>

      <p>
        Dear Mr. Ravinder, This is regarding my home loan for the flat purchased
        at SVC Indraprastha. The process of the house loan, starting from the
        application until the disbursement, you had done an outstanding
        performance to get the job done. Keep up the good work. Thank you.
      </p>
      <div className="stars">★★★★★</div>
    </motion.div>

    {/* CARD 2 – CENTER */}
    <motion.div
      className="info-card active"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
 

      {/* IMAGE */}
      <div className="card-image">
        <img src="/images/card2.jpg" alt="Srinivasa Acharya" />
      </div>

      

      <h3>Srinivasa Acharya</h3>
      <span>Hyderabad</span>

      <p>
        Dear Mr. Ravinder, Your assistance in applying for, processing, and
        disbursing my SVC Indraprastha Apartments housing loan is amazing.
        You gave the list at once to prevent document submission disturbances.
        I appreciate your support and wish you and Ambak prosperity.
      </p>

      <div className="stars">★★★★★</div>
    </motion.div>

    {/* CARD 3 – RIGHT → LEFT */}
    <motion.div
      className="info-card"
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      whileHover={{ scale: 1.03 }}
    >
    

      {/* IMAGE */}
      <div className="card-image">
        <img src="/images/card3.jpg" alt="Pankaj Agarwal" />
      </div>
    

      <h3>Pankaj Agarwal</h3>
      <span>Hyderabad</span>

      <p>
        I had a wonderful and seamless experience with Ravinder. They have
        managed the entire documentation and coordination with the bank without
        any hassle of multiple visits for home loan. Additionally, they have
        shortlisted the best home loan offers which has always been a major
        pain point.
      </p>
    </motion.div>

  </div>
</section>

</>
);
}
