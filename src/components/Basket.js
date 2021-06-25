import React from "react";

import "./styles/Basket.css";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsTax = cartItems.reduce((a, c) => a + c.tax * (c.price * c.qty), 0);
  const taxPrice = itemsTax;
  const itemsPlustax = itemsPrice + taxPrice;
  const discountPrice = itemsPlustax > 15 ? 0.15 : 0;
  const totalPrice =
    discountPrice > 0 ? itemsPlustax * (1 - discountPrice) : itemsPlustax;

  return (
    <div className="manager">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="item__manager">
          <div className="col">
            <strong>{item.name}</strong>
          </div>
          <div className="button__size">
            <div className="col">
              <button onClick={() => onAdd(item)} className="btn btn-primary">
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className="btn btn-danger mas"
              >
                -
              </button>
            </div>
          </div>
          <div className="col text-end">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}

      {cartItems.lenght !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col">Items Price</div>
            <div className="col text-end">$ {itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col">Tax Price</div>
            <div className="col text-end">$ {taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col">Discount Price</div>
            <div className="col text-end">
              %{discountPrice.toFixed(2) * 100}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <strong>Total Price</strong>
            </div>
            <div className="col text-end">
              <strong>$ {totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="center__but">
            <div className="row">
              <button
                className="btn btn-primary"
                onClick={() =>
                  setTimeout(function () {
                    alert("Your Order is ready, Enjoy!");
                  }, 1000)
                }
              >
                Buy
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
