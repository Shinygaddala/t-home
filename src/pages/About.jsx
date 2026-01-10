import "./Pages.css";

export default function AboutSection() {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        {/* HEADER */}
        <div className="about-header">
          <div className="about-title">
            <span className="line"></span>
            <p>About us</p>
          </div>

          <h2>
            Experience, expertise,
            <br />
            and excellence in every step
          </h2>

          <div className="about-stats">
            <div>
              <h3>5k+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div>
              <h3>9+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-content">
          {/* IMAGE */}
          <div className="about-image">
            <img
              src="/images/about-illustration.png"
              alt="About Illustration"
            />
          </div>

          {/* CARDS */}
          <div className="about-cards">
            <div className="card primary">
              <h4>🎯 Our Mission</h4>
              <p>
                To deliver transparent, customer-focused loan services that
                empower borrowers to achieve their goals.
              </p>
            </div>

            <div className="card">
              <h4>👁️ Our Vision</h4>
              <p>
                To make financial solutions easy, affordable, and accessible
                for every Indian individual and business.
              </p>
            </div>

            <div className="card">
              <h4>🤝 Our Promise</h4>
              <p>
                To simplify borrowing with smart, secure, and trusted
                financial solutions across all loan categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="team-section">
        <div className="team-container">
          {/* CARD 1 */}
          <div className="team-card primary">
            <div className="image-wrapper">
              <img
                src="/images/founder1.png"
                alt="Ravinder Reddy Attapuram"
              />
            </div>

            <div className="card-body">
              <h3>Ravinder Reddy Attapuram</h3>
              <h4>Founder & CEO</h4>

              <p>
                Entrepreneur, strategist, and changemaker leading T-Home
                towards a future where finance is transparent, easy, and
                empowering for every individual and business.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="team-card">
            <div className="image-wrapper">
              <img
                src="/images/founder2.png"
                alt="K C Pratheek Reddy"
              />
            </div>

            <div className="card-body">
              <h3>K C Pratheek Reddy</h3>
              <h4>Co-Founder & CTO</h4>

              <p>
                The tech visionary behind T-Home’s digital transformation.
                Leads platform innovation and fintech initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
