import React, { useState, useEffect } from "react";
import { add } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "20px",
            margin: "10px",
            maxWidth: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "auto" }}
          />
          <h2 style={{ fontSize: "1.5em", margin: "10px 0" }}>
            {product.title}
          </h2>
          <p style={{ color: "#888", fontSize: "0.9em" }}>
            {product.description}
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            ${product.price}
          </p>
          <button
            onClick={() => handleAdd(product)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
