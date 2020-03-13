import React from 'react';

class AddToCart extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        // this.state = {
        //     user_id: "",
        //     product_id: "",
        //     quantity: 1
        // };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const cart = Object.assign({}, this.state);
        this.props.makeCartItems({
            user_id: this.props.session.currentUser.id,
            product_id: this.props.entities.product.id,
            quantity: 1
        })
        
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="add_to_cart">
                <input className="add-cart-submit" type="submit" value="Submit" />
            </form>
            </div>

        )
    }
}

export default AddToCart;