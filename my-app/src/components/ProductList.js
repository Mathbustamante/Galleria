import React, { Component } from 'react';
import Product from './Product'
import AOS from 'aos';
import {Link} from 'react-router-dom';


AOS.init();
class ProductList extends Component {
    render() {
      return (
        <div className="App">
          <div className="banner-2">
            <div className="banner">
              
            </div>
          </div>
          <div className="merge-box">
            <div className="text-box">
                <h1>
                  Get to know our fashion store 
                  and dress like no other.
                </h1>
                <Link to="/">
                    <span className="home-btn">Shop Now</span>
                </Link>
            </div>
          </div>
          <div>
            
            <div className="who-we-are">
              {/* <h1>Who we are</h1> */}
              <div className="data">
                <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <div className="icons">
                          <i className="fas fa-shopping-bag"></i>
                        </div>
                        <div className="add-info">
                          <p>5,000+ on sales</p>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="icons">
                          <i className="fas fa-tag"></i>
                        </div>
                        <div className="add-info">
                          <p>60% off on sales</p>
                        </div>
                        
                      </div>
                      <div className="col-sm">
                        <div className="icons">
                          <i className="fas fa-shipping-fast"></i>
                        </div> 
                        <div className="add-info">
                          <p>1 day shipping</p>
                        </div>
                       
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list">
            <Product />
          </div>

          <div className="start-now">
            <div className="text-box">
                <h1>
                  Start selling now
                </h1>
                <Link to="/new">
                  <span className="btn"  role="button">Sell Now
                  {/* <i className="fas fa-long-arrow-alt-right"></i> */}
                  </span>
                </Link>
                
            </div>
          </div>
          <div  className="footer">
              
          </div>
        </div>
      );
    }
  }
  
  export default ProductList;