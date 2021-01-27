import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class ProductDetail extends Component {
    state = {
        product: null,
        products: []
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(this.props);
        Axios.get('/api/products/' + id)
        .then(res => {
            this.setState({
                product: res.data
            })
            console.log(res);
        })

        fetch('/api/products/')
        .then(res => res.json())
        .then(products => this.setState({ products }))
    }

    handleClick = (e) => {
        alert("Thanks for using the app");
    }

    //Delete the product from the database
    handleDelete = (e) => {
        this.deleteProduct(this.state);
    };

    //Iherits from handleDelete and deletes from the database
    deleteProduct(product) {
        Axios({method: 'DELETE', url: '/api/products/' + product.product._id})
            .then(alert("This product was deleted"))
            .then(window.location.href = "/");
    };

    render(){

        const product = this.state.product ? (
            <div className="container">
                <div className="product-container">
                    <div className="row">
                        <div className="image-detail col col-lg-4">
                            <img className="img-fluid" src={this.state.product.image} alt="Card image cap" />
                        </div>
                        <div className="col col-lg-5">
                            <div className="product-detail">
                                <h4>{this.state.product.title}</h4>
                                <p>{this.state.product.info}</p>
                                <p>${this.state.product.price}</p>
                                <div className="action">                           
                                    <button type="button" onClick={this.handleClick} className="btn add-cart">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="product-category col col-lg-3">
                           <h1>Categories</h1>
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
                        <div className="shipping-info col col-lg-9">
                                <div className="title">
                                    <h1>Shipping Info</h1>
                                </div>
                                <div className="text">
                                    <p>With our partnership with Amazon, we will start ofering free 1 day shipping with an extra $10 dolars of 
                                        the final price. Besides this opition, we also offer a 2 day shipping for $5 extra dolars, and free 3 days
                                        shipping. Don't miss out the oportunity and get your item on the next day. 
                                    </p>
                                </div>
                        </div>
                        <div className="extra-options col col-lg-3">
                                <div className="title">
                                    <h1>Extra Options:</h1>
                                </div>
                                <ul>
                                    <li><a onClick={this.handleDelete} href="#">Delete Product</a></li>
                                    <li>
                                        <Link to={'/edit/'+ this.state.product._id}>
                                        Edit Product
                                        </Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        ): (
            <div>Loading post...</div>
        )
        return(
            <div className="container">
                { product }
            </div>
        )
    }
}

export default ProductDetail;