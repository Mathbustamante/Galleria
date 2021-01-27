import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Explore extends Component {
    constructor(){
      super();
      this.state = {
        products: []
      }
    }

    componentDidMount(){
      fetch("/api/products")
      .then(response => response.json())
      .then(products => this.setState({ products }));
    }

    render() {
      console.log(this.state.products);
      return (
        <div className="App">
          <div className="category-box">
            <h1>Explore all of our products</h1>
            <div  className="card-row">
                {this.state.products.map(product =>
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
                )}
              </div>
          </div>
        </div>
      );
    }
  }
  
  export default Explore;