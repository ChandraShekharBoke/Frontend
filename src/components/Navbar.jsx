import { useEffect } from "react";
import newlogo from "../assets/newlogo.png";
import "./Navbar.css";

const Navbar = () => {

  // Close mobile menu when clicking a link
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.getElementById("navbarMenu");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid custom-container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={newlogo}
            alt="Krishna Naturals - Fruit Powder Manufacturer & Exporter"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav align-items-lg-center">

            {[
              { id: "home", label: "Home" },
              { id: "products", label: "Products" },
              { id: "benefits", label: "Benefits" },
              { id: "services", label: "Services" },
              { id: "contact", label: "Contact" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={`#${item.id}`}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              <a href="#products" className="btn btn-premium">
                View Products
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;