import React from 'react';
import CartIndexItem from './cart_index_item';
import { Link } from 'react-router-dom';

class CartForm extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.getCartItems();
    }

    getCartTotal() {
        //get the items in the user's cart
        //match product id with products table to find price
        //multiply price with quantity
        //add up all of the subtotals

    }

    render() {
        const { products, destroyCartItem, currentUser, cart } = this.props;
        const cart_page = currentUser? (
            <div className="cart_items">
                <header className="shopping-cart-header">
                    <h2>Shopping Cart</h2>
                </header>
                <br />
                <div className="cart-header">
                    <h1 className="prod-head">Product</h1>
                    <h1> </h1>
                    <h1>Qty</h1>
                    <h1>Price</h1>
                    <h1>Total</h1>
                </div>
                <div className="prod_block">
                    {products.map(product => 
                    <CartIndexItem 
                        product={product} 
                        cart={cart} 
                        key={product.id} 
                        currentUser={currentUser}
                        destroyCartItem={destroyCartItem}/>)}
                </div>
                {/* <div className="price-total">
                        <h1>Total</h1>
                        <h1>{products.all}</h1>
                </div> */}
            </div>
        ) : (
            <div className="header">
                <h1>Please Sign in to View Shopping Cart</h1>
            </div>
            )
        return (
            cart_page
        )
    }
}

export default CartForm;