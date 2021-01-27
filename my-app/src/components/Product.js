import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import AOS from 'aos';

AOS.init();

class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount(){
      fetch('/api/products/')
      .then(res => res.json())
      .then(products => this.setState({ products }))
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Explore some of our products</h1>
          <div  className="card-row">
            {this.state.products.slice(0, 9).map(product => 
             
                <div key={product._id} data-aos="fade-up" data-aos-duration="1000" className="division">
                  <div className=" image-box">
                    <div className="image-layer">
                      <Link to={'/'+ product._id }>
                        <img className="img-fluid" src={product.image} alt="Card image cap" />
                      </Link>
                    </div>
                  </div>
                <div>
                    <div className="info-box">
                        <p>{ product.title }</p>
                    </div>
                  </div>
              </div>
            ) }
          </div>
        </div>
      </div>  
    );
  }
}
  
export default Product;