import React from "react";

import "./styles/Product.css";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-3">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <div className="text-center texto">
            <strong>${product.price}</strong>
          </div>
          <div className="text-center">
            <button
              onClick={() => onAdd(product)}
              type="button"
              class="btn btn-secondary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
