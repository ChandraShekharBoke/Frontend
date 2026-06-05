// src/pages/Product.jsx
import { useEffect, useState } from "react";
import { getPublicProducts } from "../services/productService";

const Product = () => {
  const [products, setProducts] = useState([]);

  // ✅ COMMENT: Yeh function public page me products DB se laata hai
  const fetchPublicProducts = async () => {
    try {
      const data = await getPublicProducts();
      setProducts(data || []);
    } catch (error) {
      console.error("Public product fetch error:", error.message);
    }
  };

  // ✅ COMMENT: useEffect me call karna hai
  useEffect(() => {
    fetchPublicProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
        {products.map((p) => {
          const images = p.image_url ? JSON.parse(p.image_url) : [];
          const firstImg = images[0];

          return (
            <div key={p.id} style={{ background: "#fff", borderRadius: 12, padding: 12 }}>
              <img
                src={firstImg || "https://via.placeholder.com/300x200"}
                alt={p.name}
                style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 10 }}
              />
              <h4 style={{ marginTop: 10 }}>{p.name}</h4>
              <p style={{ margin: "4px 0", color: "#666" }}>{p.category}</p>
              <p style={{ margin: 0, fontWeight: 600 }}>₹ {p.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;