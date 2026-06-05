// src/Admin/AdminProduct.jsx
import { useEffect, useState } from "react";
import {
  getAllProducts,
  deleteProduct
} from "./services/productService";
import "./style/Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data || []);
    } catch (error) {
      console.error("Product fetch error:", error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Delete error:", error.message);
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Products</h2>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6">No products found</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image_url || "https://via.placeholder.com/50"}
                      width="50"
                      alt="product"
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>
                    <span className={`status ${product.status?.toLowerCase()}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;