import React from "react";

import "./styles/Navbar.css";
import logo from "../images/coffeepng.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Coffee</span>
            <span className="font-weight-bold">Shop</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
