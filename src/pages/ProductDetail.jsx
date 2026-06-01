import { useParams, NavLink } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  // In real app, fetch from API or props
  const product = {
    id: id || 1,
    name: "Mango Powder",
    category: "Fruit Powders",
    description:
      "Premium spray-dried mango powder made from naturally ripened Alphonso mangoes. Retains rich flavor, color, and nutritional value. Ideal for beverages, desserts, and nutraceuticals.",
    image: "/assets/mango-powder.png",
    features: [
      "100% Natural – No additives or preservatives",
      "High nutritional retention",
      "Long shelf life & excellent solubility",
      "Suitable for export markets",
    ],
    specifications: {
      "Shelf Life": "18 months",
      "Moisture": "≤ 5%",
      "Mesh Size": "40–60 mesh",
      "Packaging": "25 kg HDPE bags / Custom",
    },
  };

  return (
    <section className="product-detail-section">
      <div className="product-detail-container">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <NavLink to="/products">Products</NavLink>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">

          {/* Image */}
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
          </div>

          {/* Content */}
          <div className="product-detail-content">

            <span className="product-category">{product.category}</span>

            <h1 className="product-detail-title">{product.name}</h1>

            <p className="product-detail-description">
              {product.description}
            </p>

            {/* Features */}
            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="product-specifications">
              <h3>Specifications</h3>
              <div className="spec-grid">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <span className="spec-label">{key}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="product-actions">
              <NavLink to="/contact" className="btn btn-primary">
                Request a Quote
              </NavLink>
              <NavLink to="/contact" className="btn btn-outline">
                Contact Sales Team
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;