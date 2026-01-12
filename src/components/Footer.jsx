import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP FOOTER */}
      <motion.div
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >

        {/* ABOUT */}
        <motion.div
          className="footer-col"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="logo">T-HOME</h2>
          <p>
            T-HOME is dedicated to providing innovative and reliable solutions
            for your home. We blend quality, technology, and design to enhance
            your living experience.
          </p>

          <div className="footer-social-icons">

            <motion.a
              href="https://www.facebook.com/people/T-Home/61571992704350/"
              target="_blank"
              rel="noopener noreferrer"
              className="social facebook"
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/thomefintech/"
              target="_blank"
              rel="noopener noreferrer"
              className="social instagram"
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>

            <motion.a
              href="https://in.linkedin.com/company/thomefintech"
              target="_blank"
              rel="noopener noreferrer"
              className="social linkedin"
              whileHover={{ scale: 1.2, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>

          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          className="footer-col"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </motion.div>

        {/* OFFICIAL INFO */}
        <motion.div
          className="footer-col"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Official Info</h3>

          {[
            { icon: "📞", title: "Phone", value: "+91 7032183836" },
            { icon: "✉️", title: "Mail Us", value: "info@thome.co.in" },
            {
              icon: "📍",
              title: "Address",
              value: `H.No: 2-88/4, Quthbullapur Village,
Opposite to Government Veterinary Hospital,
Hyderabad – 500055`,
            },
          ].map((item, index) => (
            <motion.div
              className="info-item"
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <span className="icon">{item.icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SUBSCRIBE */}
        <motion.div
          className="footer-col"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>Subscribe Us Today</h3>
          <p>Subscribe & receive our latest offers and updates.</p>
          <p className="note">* We do not share your email ID</p>
        </motion.div>

      </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <p>© 2025 T-Home. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;
