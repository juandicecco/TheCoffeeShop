import React from "react";

import Product from "./Product";

import "./styles/Main.css";

export default function Main(props) {
  const { products, onAdd } = props;

  return (
    <main>
      <div className="manage">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
