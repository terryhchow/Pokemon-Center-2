import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartContainer from './add_to_cart_container';
import { Redirect } from 'react-router-dom';

class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {quantity : 1, cart: []}
        this.increaseQuantity = this.increaseQuantity.bind(this)
        this.decreaseQuantity = this.decreaseQuantity.bind(this)
    }
    componentDidMount() {
        this.props.getCartItems()
        this.state.cart = Object.values(this.props.cart)
        this.props.requestProduct(this.props.match.params.productId);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { product, cart } = this.props;
        const cart_item = {
            product_id: product.id,
            user_id: this.props.currentUser.id,
            quantity: this.state.quantity
        }
        for (let key in cart) {
            let current_item = cart[key]
            if (current_item.product_id === product.id) {
                current_item.quantity += cart_item.quantity;
                this.props.updateCartItem(current_item)
                return
            }
        }
        this.props
            .createCartItem(cart_item)
            .then(data => this.props.history.push('/cart_items/${data.cartItems.id}'))
            .then(console.log(".then", this.state.cart))
        let prodID = cart_item.product_id
    }
    increaseQuantity(e) {
        e.preventDefault();
        this.setState({quantity: this.state.quantity + 1})
    }
    decreaseQuantity(e) {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    }

    render () {
        const { product, cart } = this.props;
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
                    <span>
                        <h1 className="quantity">QUANTITY</h1>
                        <button onClick={this.decreaseQuantity} onChange={this.update}>-</button>
                            <h1 className="moving_qty">{this.state.quantity}</h1>
                        <button 
                                onClick={this.increaseQuantity} onChange={this.update}>+</button>
                    </span>
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