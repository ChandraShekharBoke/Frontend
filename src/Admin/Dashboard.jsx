// src/Admin/Dashboard.jsx
import { useEffect, useState } from "react";
import {
  getTotalProducts,
  getTotalContacts,
  getRecentProducts,
  getRecentContacts
} from "./services/dashboardService";
import "./style/Dashboard.css";

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalContacts, setTotalContacts] = useState(0);
  const [recentProducts, setRecentProducts] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCount = await getTotalProducts();
        const contactsCount = await getTotalContacts();
        const recentProd = await getRecentProducts();
        const recentCont = await getRecentContacts();

        setTotalProducts(productsCount || 0);
        setTotalContacts(contactsCount || 0);
        setRecentProducts(recentProd || []);
        setRecentContacts(recentCont || []);
      } catch (error) {
        console.error("Dashboard error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="page-title">Welcome Admin 👋</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{totalProducts}</h3>
          <p>Total Products</p>
        </div>

        <div className="stat-card">
          <h3>{totalContacts}</h3>
          <p>Total Contacts</p>
        </div>
      </div>

      <div className="activity-section">
        <h3>Recent Activity</h3>
        <ul>
          {recentProducts.map((product) => (
            <li key={`p-${product.id}`}>
              ✅ New product added: {product.name}
            </li>
          ))}

          {recentContacts.map((contact) => (
            <li key={`c-${contact.id}`}>
              📩 New message from: {contact.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;