import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Inventory Items</h1>
      {products.map(p => (
        <p key={p.id}>{p.name} — Stock: {p.stock}</p>
      ))}
    </div>
  );
}
