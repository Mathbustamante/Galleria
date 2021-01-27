import React, {Component} from 'react';
import Axios from 'axios';

//This page will make a post request to the products database and add a new product to it
class New extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            image: '',
            price: '',
            info: '',
            category: ''
        }
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value});
    }

    handleImageChange = (e) => {
        this.setState({image: e.target.value});
    }

    handlePriceChange = (e) => {
        this.setState({price: e.target.value});
    }

    handleInfoChange = (e) => {
        this.setState({info: e.target.value});
    }

    handleCategoryChange = (e) => {
        this.setState({category: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // console.log(this.props.user);
        if(this.state.title === "" || this.state.image === "" || this.state.price === ""  || this.state.info === "" || this.state.category === "" ){
            alert("Please complete all the fields");
        } else {
            Axios({
                method: 'POST', url: '/api/products', data: {
                    title: this.state.title,
                    image: this.state.image,
                    price: this.state.price,
                    info: this.state.info,
                    category: this.state.category,
    
                }
            })
            .then(function (response) {alert("Item ready for sale!")})
            .then(window.location.href = "/");
        }
    }


    render() {
            return (
                <div className="postPage">
                    <div className="post-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input id="title" name="title" className="form-control" value={this.state.title} type="text"
                                    onChange={this.handleTitleChange} placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <textarea id="image" name="image" className="md-textarea form-control"
                                        value={this.state.image} type="text" rows="3"
                                        onChange={this.handleImageChange} placeholder="Image URL"></textarea>
                            </div>
                            <div className="form-group">
                                <input id="price" name="price" className="form-control" value={this.state.price} type="text"
                                    onChange={this.handlePriceChange} placeholder="Price"/>
                            </div>
                            <div className="form-group">
                                <textarea id="info" name="info" className="md-textarea form-control" value={this.state.info}
                                        type="text" rows="3" onChange={this.handleInfoChange} placeholder="Details"></textarea>
                            </div>
                            <div className="form-group">
                                <input id="category" name="category" className="form-control" value={this.state.category}
                                    type="text" onChange={this.handleCategoryChange} placeholder="Category (Toys, Fashion, or Craft)"/>
                            </div>
                            <button className="btn">Send data!</button>
                        </form>
                    </div>
                </div>
            );
    }
}

export default New;