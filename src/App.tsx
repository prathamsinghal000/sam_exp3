import React from "react";
import "./App.css";

const products = [
  {
    name: "Gaming Laptop",
    price: 89999,
    inStock: true,
    category: "Electronics",
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
  },
  {
    name: "Smartphone Pro",
    price: 49999,
    inStock: false,
    category: "Mobiles",
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    name: "Wireless Headphones",
    price: 3999,
    inStock: true,
    category: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
  },
  {
    name: "Smartwatch X",
    price: 7999,
    inStock: true,
    category: "Wearables",
    imageUrl:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500",
  },
];

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Product Catalog</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">₹{product.price.toLocaleString()}</p>
            <p className={product.inStock ? "instock" : "outofstock"}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <button disabled={!product.inStock}>
              {product.inStock ? "Add to Cart" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
