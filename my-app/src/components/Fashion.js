import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Toys extends Component {
    constructor() {
        super();
        this.state = {
          products: [],
          category: 'Fashion'
        }
    }

    componentDidMount(){
        fetch('/api/products/')
        .then(res => res.json())
        .then(products => this.setState({ products }))
    }

    render() {
    let filteredProducts = this.state.products.filter(
        (product) => {
            return product.category.toLowerCase().indexOf(this.state.category.toLowerCase()) !== -1;
        }
    );
      return (
        <div className="App">
        <div className="banner-2">
            <div className="banner-fashion"></div>
        </div>
        <div className="merge-box">
            <div className="text-box">
                <h1>
                    Our clothes are known for having the best
                    quality on the market.
                </h1>
                <div className="link">
                    <Link to="/">
                        <span className="home-btn">Shop Now</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className="category-box">
                <h1>Fashion List:</h1>
                <div  className="card-row">
                    {filteredProducts.map(product =>
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
  
  export default Toys;