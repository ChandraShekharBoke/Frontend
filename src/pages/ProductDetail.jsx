import { useLocation, NavLink } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="product-detail-section">
        <h2>Product not found</h2>
        <NavLink to="/products">Back to Products</NavLink>
      </div>
    );
  }

  const benefits = product.benefits || [
    "Rich in natural antioxidants",
    "Boosts immune system",
    "Supports digestive health",
    "100% natural & preservative free",
    "No added sugar or chemicals",
    "Plant-based & vegan friendly",
  ];

  return (
    <section className="product-detail-section">
      <div className="product-detail-container">

        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <NavLink to="/products">Products</NavLink>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">

          {/* Product Image */}
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
          </div>

          {/* Product Content */}
          <div className="product-detail-content">

            <h1 className="product-detail-title">{product.name}</h1>

            <p className="product-detail-description">{product.details}</p>

            {/* Price & Benefits Side by Side */}
            <div className="price-benefits-row">

              {/* Price & Weight List */}
              <div className="price-weight-section">
                <h3>Packaging & Pricing</h3>
                <div className="price-list">
                  <div className="price-list-header">
                    <span>Weight</span>
                    <span>Price</span>
                  </div>
                  <div className="price-list-item">
                    <span className="weight">100 gm</span>
                    <span className="price">₹299</span>
                  </div>
                  <div className="price-list-item">
                    <span className="weight">250 gm</span>
                    <span className="price">₹599</span>
                  </div>
                  <div className="price-list-item">
                    <span className="weight">500 gm</span>
                    <span className="price">₹1,099</span>
                  </div>
                  <div className="price-list-item">
                    <span className="weight">1 Kg</span>
                    <span className="price">₹1,999</span>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="benefits-section">
                <h3>Key Benefits</h3>
                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <div className="benefit-item" key={index}>
                      <span className="benefit-icon">✓</span>
                      <span className="benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
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