import React from "react";
import { Link } from "react-router-dom";

// import coffeepng from "../images/coffeecup.png";
import logo from "../images/PngItem_133041.png";
import "./styles/HomePage.css";

function Home() {
  return (
    <div className="Home">
      <div className="col-text">
        {/* <img src={coffeepng} alt="Logo" /> */}
        <div>
          <h1>Coffee Shop</h1>
          <Link className="btn btn-success" to="/products">
            Shop With Us!
          </Link>
        </div>
      </div>
      <div className="col-img">
        <img src={logo} alt="coffee" />
      </div>
    </div>
  );
}

export default Home;
