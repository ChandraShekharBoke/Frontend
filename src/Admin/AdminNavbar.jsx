import { NavLink, useNavigate } from "react-router-dom";
import "./style/AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/Admin");
  };

  return (
    <div className="admin-navbar">
      <div className="admin-logo">
        🌿 Krishna Admin
      </div>

      <div className="admin-links">
        <NavLink to="/AdminDashboard">Dashboard</NavLink>
        <NavLink to="/AdminProduct">Products</NavLink>
        <NavLink to="/AdminContacts">Contacts</NavLink>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminNavbar;