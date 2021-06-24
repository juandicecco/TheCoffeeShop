import React, { Component } from "react";
import img1 from "../images/espresso1.jpg";
import img2 from "../images/latte.jpg";
import img3 from "../images/americano.jpg";
import img4 from "../images/mocca.jpg";
import img5 from "../images/tea.jpg";
import img6 from "../images/cola.jpg";
import img7 from "../images/sandwich.jpg";
import img8 from "../images/croissant.jpg";

import "./styles/ListProducts.css";

class ListProducts extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col">
            <div className="card">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Espresso</h5>
                <p className="card-text">
                  Strong black coffee made by forcing steam through ground
                  coffee beans.
                </p>
                <a href="#" className="btn btn-primary">
                  5
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Latte</h5>
                <p className="card-text">
                  Espresso mixed with hot or steamed milk.
                </p>
                <a href="#" className="btn btn-primary">
                  6
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Americano</h5>
                <p className="card-text">
                  Type of coffee drink prepared by diluting an espresso with hot
                  water.
                </p>
                <a href="#" className="btn btn-primary">
                  5
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cappuccino</h5>
                <p className="card-text">
                  Single espresso shot and hot milk, with the surface topped
                  with foamed milk.
                </p>
                <a href="#" className="btn btn-primary">
                  7
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col">
            <div className="card">
              <img src={img5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Iced Tea</h5>
                <p className="card-text">
                  A chilled drink of sweetened tea without milk, typically
                  flavoured with lemon.
                </p>
                <a href="#" className="btn btn-primary">
                  4
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Coke</h5>
                <p className="card-text">
                  Carbonated soft drink manufactured by The Coca-Cola Company.
                </p>
                <a href="#" className="btn btn-primary">
                  2
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sandwich</h5>
                <p className="card-text">
                  An item of food consisting of two pieces of bread with filling
                  between them.
                </p>
                <a href="#" className="btn btn-primary">
                  12
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={img8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Croissant</h5>
                <p className="card-text">
                  A piece of light bread having a curved shape with two narrow
                  pointed ends.
                </p>
                <a href="#" className="btn btn-primary">
                  6
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProducts;
