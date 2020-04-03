import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            image: "",
            product: "",
            price: 0
        };

    }

    handleChangeImage = (e) => {
        this.setState({
            Image: e.target.value
        });
    }

    handleChangeProduct = (e) => {
        this.setState({
            Product: e.target.value
        });
    }

    handleChangePrice = (e) => {
        this.setState({
            Price: e.target.value
        });
    }

    handleChangeCancel = (e) => {
        this.setState({
            image: "",
            product: "",
            price: 0
        })
    }

    handleChangeAdd = (e) => {
        const { image, product, price } = this.state;
        axios.post('/api/product', {
            image,
            product,
            price
        })
        .then(response => {
            this.props.getInventory();
            this.handleChangeCancel();
        }).catch(error => {
            console.log(error)
        })
    }

    






    render() {
        return(
            <div>
                <div>
                    <p>Image URL:</p>
                    <input 
                    placeholder='Image URL' 
                    onChange={this.handleChangeImage} 
                    />
                    <p>Product Name:</p>
                    <input 
                    placeholder='Product Name'
                    onChange={this.handleChangeProduct}
                    />
                    <p>Price:</p>
                    <input 
                    placeholder='Price'
                    onChange={this.handleChangePrice}
                    />
                    <div>
                        <button onClick={this.handleChangeCancel}>Cancel</button>
                        <button onClick={this.handleChangeAdd}>Add to Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}