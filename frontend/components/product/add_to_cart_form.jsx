import React from 'react';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.createCartItem
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const cart = Object.assign({}, this.state);
        this.props
            .createCartItem(this.state)
            .then(data => this.props.history.push('/cart_items/${data.cartItems.id}'))
        // this.props.getCartItems({
        //     user_id: this.props.session.currentUser.id,
        //     product_id: this.props.entities.product.id,
        //     quantity: 1
        // })
        
    }
    render() {
        if (!currentUser) return null
        return (
            <div>
                <button onClick={this.handleSubmit} className="add_to_cart">Submit</button>
            {/* <form onSubmit={this.handleSubmit} className="add_to_cart">
                <input className="add-cart-submit" type="submit" value="Submit" />
            </form> */}
            </div>

        )
    }
}

export default AddToCart;