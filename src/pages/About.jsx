import "./Pages.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [activeImage, setActiveImage] = useState("default");

  const images = {
    default: "/images/about-illustration.png",
    mission: "/images/mission.png",
    vision: "/images/vision.png",
    promise: "/images/promise.png",
  };

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">

        {/* HEADER */}
        <div className="about-header">
          <motion.div
            className="about-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <span className="line"></span>
            <p>About us</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            Experience, expertise,
            <br />
            and excellence in every step
          </motion.h2>

          {/* STATS */}
          <div className="about-stats">
            {[
              { value: "5k+", label: "Satisfied Clients" },
              { value: "95%", label: "Success Rate" },
              { value: "9+", label: "Years of Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-content">

          {/* IMAGE */}
          <div className="about-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt="About Illustration"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

          {/* HIGHLIGHTS */}
          <div
            className="about-highlights"
            onMouseLeave={() => setActiveImage("default")}
          >
            <motion.p
              className="highlight"
              onMouseEnter={() => setActiveImage("mission")}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              whileHover={{ x: 6 }}
            >
              <strong>🎯 Our Mission</strong> — To deliver transparent,
              customer-focused loan services that empower borrowers.
            </motion.p>

            <motion.p
              className="highlight"
              onMouseEnter={() => setActiveImage("vision")}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ x: 6 }}
            >
              <strong>👁️ Our Vision</strong> — To make financial solutions easy,
              affordable, and accessible for everyone.
            </motion.p>

            <motion.p
              className="highlight"
              onMouseEnter={() => setActiveImage("promise")}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ x: 6 }}
            >
              <strong>🤝 Our Promise</strong> — To simplify borrowing with smart,
              secure, and trusted solutions.
            </motion.p>
          </div>

        </div>
      </section>
      <section className="team-section">
        <div className="team-container">
          {/* TEAM CARD 1 */}
          <motion.div 
           className="team-card primary"
           initial={{ opacity: 0, x: -50, scale: 0.95 }}
           whileInView={{ opacity: 1, x: 0, scale: 1 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.7 }}
           whileHover={{ y: -10, scale: 1.03 }} >
            <div className="image-wrapper">
              <img src="/images/founder1.png" alt="Ravinder Reddy Attapuram" />
              </div> <div className="card-body">
                <h3>Ravinder Reddy Attapuram</h3>
                <h4>Founder & CEO</h4> 
                <p> Entrepreneur, strategist, and changemaker leading T-Home 
                  towards a future where finance is transparent, easy, and empowering. 
                </p>
              </div>
           </motion.div>
           {/* TEAM CARD 2 */} 
          <motion.div 
           className="team-card" initial={{ opacity: 0, x: 50, scale: 0.95 }}
           whileInView={{ opacity: 1, x: 0, scale: 1 }}
           viewport={{ once: false, amount: 0.3 }} 
           transition={{ duration: 0.7, delay: 0.1 }} 
           whileHover={{ y: -10, scale: 1.03 }} >
            <div className="image-wrapper">
              <img src="/images/founder2.png" alt="K C Pratheek Reddy" />
              </div>
              <div className="card-body"> 
                <h3>K C Pratheek Reddy</h3> 
                <h4>Co-Founder & CTO</h4>
                 <p> The tech visionary behind T-Home’s digital transformation, 
                  leading platform innovation and fintech initiatives. 
                </p>
                 </div> 
                 </motion.div> 
                 </div>
        </section>
    </>
  );
}
