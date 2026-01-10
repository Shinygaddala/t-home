import "./Pages.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* LEFT CONTENT */}
        <div className="contact-left">
          <span className="section-tag">Contact Us</span>
          <h2>Your Dream Home is Just a Loan Away!</h2>
          <p>
            Turn your dream of owning a home into reality with our hassle-free
            home loan solutions. Get quick approval, flexible repayment options,
            and the best interest rates.
          </p>

          <img
            src="/images/contact-illustration.png"
            alt="Contact Illustration"
            className="contact-image"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <form className="contact-form">
            
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Email@example.com" />
            </div>

            <div className="form-group">
              <label>Select Your Service</label>
              <select>
                <option>Home Loans</option>
                <option>Personal Loans</option>
                <option>Loan Against Property</option>
                <option>Mortgage Loan</option>
                <option>Balance Transfer</option>
                <option>ITR Filing</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
