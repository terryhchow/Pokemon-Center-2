import React from 'react';

import { Link } from 'react-router-dom';

class CartForm extends React.Component {
    // constructor(props) {
    //     super(props)
    // };

    // componentDidMount() {
    //     this.props.getCartItems();
    // }

    render() {
        return (
            <div className="cart_items">
                <header className="header">
                    <h1>Shopping Cart</h1>
                </header>
                <div className="prod_block"> 
                {cart_items.map(product => <ProductIndexItem product={cart_item.productId} key={product.id} />)}
                </div>
            </div>
        )
    }
}

export default CartForm;