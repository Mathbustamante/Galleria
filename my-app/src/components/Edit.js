import React, {Component} from 'react';
import Axios from 'axios';

//This page will make a post request to the products database and add a new product to it
class Edit extends Component {
    constructor() {
        super();
        this.state = {
            product: null
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        Axios.get('https://floating-garden-40393.herokuapp.com/api/products/' + id)
        .then(res => {
            this.setState({
                product: res.data
            })
        })
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
        if(this.state.title === "" || this.state.image === "" || this.state.price === ""  || this.state.info === "" || this.state.category === "" ){
            alert("Please complete all the fields");
        } else {
            Axios({
                method: 'PUT', url: '/api/products/' + this.props.match.params.id, data: {
                    title: this.state.title,
                    image: this.state.image,
                    price: this.state.price,
                    info: this.state.info,
                    category: this.state.category,
    
                }
            })
            .then(window.location.href = "/");
        }
    }


    render() {
            const product = this.state.product ? (
                <div className="postPage">
                    <div className="post-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input id="title" name="title" className="form-control" defaultValue={this.state.product.title} type="text"
                                    onChange={this.handleTitleChange} placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <textarea id="image" name="image" className="md-textarea form-control"
                                defaultValue={this.state.product.image} type="text" rows="3"
                                        onChange={this.handleImageChange} placeholder="Image URL"></textarea>
                            </div>
                            <div className="form-group">
                                <input id="price" name="price" className="form-control" defaultValue={this.state.product.price} type="text"
                                    onChange={this.handlePriceChange} placeholder="Price"/>
                            </div>
                            <div className="form-group">
                                <textarea id="info" name="info" className="md-textarea form-control" defaultValue={this.state.product.info}
                                        type="text" rows="3" onChange={this.handleInfoChange} placeholder="Details"></textarea>
                            </div>
                            <div className="form-group">
                                <input id="category" name="category" className="form-control" defaultValue={this.state.product.category}
                                    type="text" onChange={this.handleCategoryChange} placeholder="Category (Toys, Fashion, or Craft)"/>
                            </div>
                            <button className="btn">Send data!</button>
                        </form>
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

export default Edit;