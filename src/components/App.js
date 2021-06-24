import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
// import BadgeDetails from "../pages/BadgeDetailsContainer";
import ListProducts from "../pages/ListProducts";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ListProducts} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
