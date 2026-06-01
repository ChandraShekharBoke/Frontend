import { NavLink } from "react-router-dom";
import newlogo from "../assets/newlogo.png";
import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Benefits", path: "/benefits" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="footer" aria-label="Website Footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand Section */}
          <div className="footer-brand">
            <img
              src={newlogo}
              alt="Krishna Naturals - Fruit Powder Manufacturer & Exporter"
              className="footer-logo"
              loading="lazy"
            />
            <p className="footer-description">
              Premium manufacturer and exporter of high-quality fruit and vegetable 
              powders, serving global food, beverage, and nutraceutical industries 
              with international standards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "footer-link active" : "footer-link"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-contact-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <a href="mailto:info@krishnanaturals.com">
                info@krishnanaturals.com
              </a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <p>Raipur, Chhattisgarh, India</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Krishna Naturals. All Rights Reserved. 
            &nbsp;•&nbsp; Premium Fruit & Vegetable Powder Manufacturer & Exporter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;