import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="logo">
          <div className="logo-icon" aria-hidden="true"></div>
          <span>T-HOME</span>
        </div>

        <nav
          className="nav"
          id="main-nav"
          role="navigation"
          aria-label="Main navigation"
        >
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/service" className="nav-link">
            Service
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
          <NavLink to="/login" className="nav-link login-btn">
            Get Started
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;