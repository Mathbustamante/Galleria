import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
      return (
        <div>
          <div className="navbar-1">
            <ul>
              <li>
                <Link to="/">
                  <span className="home-btn">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/aboutus">
                  <span className="home-btn">About Us</span>
                </Link>
              </li>
              <li><span className="title">The Galleria</span></li>
              <li>
                <Link to="/explore">
                  <span className="cart-btn">Explore</span>
                </Link>
              </li>
              <li>
                <Link to="/new">
                  <span className="cart-btn">Sell Now</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-2">
          <ul>
            <li>
              <Link to="/">
                <span className="home-btn">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/products/toys">
                <span>Toys</span>
              </Link>
            </li>
            <li>
              <Link to="/products/fashion">
                <span>Fashion</span>
              </Link>
            </li>
            <li>
              <Link to="/products/craft">
                <span>Craft</span>
              </Link>
            </li>
          </ul>
          </div>
      </div>
      );
    }
  }
  
  export default Navbar;