import "./Pages.css";
import { motion } from "framer-motion";

export default function Contact() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <motion.div className="contact-left" variants={leftVariants}>
          <span className="section-tag">Contact Us</span>

          <h2>Your Dream Home is Just a Loan Away!</h2>

          <p>
            Turn your dream of owning a home into reality with our hassle-free
            home loan solutions. Get quick approval, flexible repayment options,
            and the best interest rates.
          </p>

          <motion.img
            src="/images/contact-illustration.png"
            alt="Contact Illustration"
            className="contact-image"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div className="contact-right" variants={rightVariants}>
          <motion.form
            className="contact-form"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.div className="form-row" variants={fieldVariants}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <label>Your Email</label>
              <input type="email" placeholder="Email@example.com" />
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <label>Select Your Service</label>
              <select>
                <option>Home Loans</option>
                <option>Personal Loans</option>
                <option>Loan Against Property</option>
                <option>Mortgage Loan</option>
                <option>Balance Transfer</option>
                <option>ITR Filing</option>
              </select>
            </motion.div>

            <motion.div className="form-group" variants={fieldVariants}>
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              variants={fieldVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>

          </motion.form>
        </motion.div>

      </div>
    </motion.section>
  );
}
