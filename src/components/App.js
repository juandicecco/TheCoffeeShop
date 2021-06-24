import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import Main from "../components/Main";
import Basket from "./Basket";
import data from "../data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/products"
            component={() => <Main onAdd={onAdd} products={products} />}
          />
          <Route
            exact
            path="/cart"
            component={() => (
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            )}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
