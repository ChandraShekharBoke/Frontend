import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Navigate to product detail page using product id
    navigate(`/products/${product.id}`);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          loading="lazy"
          className="product-image"
        />
      </div>

      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>

        <p className="product-description">{product.details}</p>

        <button
          type="button"
          className="product-button"
          onClick={handleViewDetails}
          aria-label={`View details of ${product.name}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;