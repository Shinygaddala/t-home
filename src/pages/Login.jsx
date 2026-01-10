import { useState } from "react";
import "./Pages.css";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // API call here
  };

  return (
    <div className="modal-overlay">
      <div className="form-card">

        {/* CLOSE BUTTON */}
        <button
          className="close-btn"
          onClick={() => window.history.back()}
        >
          ×
        </button>

        <h2>Get Started with T-Home</h2>
        <p className="subtitle">
          Tell us what you need, and our experts will guide you.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Service Interested In *</label>
            <select
              name="service"
              required
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="fintech">Fintech Solutions</option>
              <option value="lending">Digital Lending</option>
              <option value="payments">Payments</option>
              <option value="consulting">Consulting</option>
            </select>
          </div>

          <div className="field">
            <label>Message (Optional)</label>
            <textarea
              name="message"
              placeholder="Any specific requirements?"
              rows="4"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>
        </form>

      </div>
    </div>
  );
}
