import { NavLink } from 'react-router-dom';
import './ProductPriceList.css';

const ProductPriceList = () => {
  const priceList = [
    {
      id: 1,
      name: "Mango Powder",
      category: "Fruit Powder",
      moq: "500 kg",
      packaging: "25 kg HDPE Bag",
      price: "Request Quote",
    },
    {
      id: 2,
      name: "Banana Powder",
      category: "Fruit Powder",
      moq: "500 kg",
      packaging: "25 kg HDPE Bag",
      price: "Request Quote",
    },
    {
      id: 3,
      name: "Spinach Powder",
      category: "Vegetable Powder",
      moq: "300 kg",
      packaging: "25 kg HDPE Bag",
      price: "Request Quote",
    },
    {
      id: 4,
      name: "Beetroot Powder",
      category: "Vegetable Powder",
      moq: "300 kg",
      packaging: "25 kg HDPE Bag",
      price: "Request Quote",
    },
  ];

  return (
    <section className="price-section">
      <div className="price-container">

        <div className="price-header">
          <span className="section-label">Export Price List</span>
          <h2>Product Price Catalog</h2>
          <p>
            Our pricing is based on order volume, packaging, and destination. 
            Please contact our sales team for the latest quotations.
          </p>
        </div>

        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>MOQ</th>
                <th>Packaging</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.moq}</td>
                  <td>{item.packaging}</td>
                  <td className="price-cell">{item.price}</td>
                  <td>
                    <NavLink 
                      to="/contact" 
                      className="quote-btn"
                    >
                      Request Quote
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="price-note">
          <p>
            * Prices may vary based on quantity, season, and shipping destination. 
            Custom packaging and private labeling available for bulk orders.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProductPriceList;