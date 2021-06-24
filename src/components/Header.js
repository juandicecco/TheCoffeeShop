import React from "react";

import "./styles/Header.css";
import logo from "../images/coffeepng.png";
import { Link } from "react-router-dom";

import cartlogo from "../images/cart.png";

export default function Header(props) {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">Coffee</span>
          <span className="font-weight-bold">Shop</span>
        </Link>
        <ul className="right">
          <li>
            <Link to="/products">
              <span className="product__font">Products</span>
            </Link>
            <Link to="/cart">
              <img className="Bavbar__cart" src={cartlogo} alt="Cart" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
