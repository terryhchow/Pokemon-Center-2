import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartContainer from './add_to_cart_container';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { product } = this.props;
        const cart_item = {
            product_id: product.id,
            user_id: this.props.currentUser.id,
            quantity: 1

        }
        this.props
            .createCartItem(cart_item)
            .then(data => this.props.history.push('/cart_items/${data.cartItems.id}'))
    }


    render () {
        const { product } = this.props;
        if (!product) return null
        return (
            <div className="product_show">
                <h1 className="free-ship">Free Shipping on All Orders over $50!</h1>
                <header className="header">
                    <Link to="/" className="prod_path">HOME</Link>
                </header>
                <div className="prod_body">
                    <img className="item_image" src={window['prod' + product.id.toString()]} />
                    <div className="item_side">
                    <h1 className="show_name">{product.name}</h1>
                    <h1 className="show_price">${product.price}</h1>
                        <button className="add_cart" onClick={this.handleSubmit}>ADD TO CART</button>
                        
                    </div>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <br/>
                    <h2>{product.description}</h2>
                </div>

            </div>
        )
    }
}



export default ProductShow;