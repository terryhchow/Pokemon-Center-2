import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class CartShow extends React.Component {
    render() {
        return (
            <div>
                <h1 classname="item_added">Item Successfully Added to Cart!</h1>
                <h1>
                    <Link to="/cart" className="header-link">
                        Go To Cart
                    </Link>
                </h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUserId: state.session.id,
        products: Object.values(state.entities.products),
        currentUser: state.session.currentUser,
        cart: Object.values(state.entities.cart)
    }
};

const mapDispatchToProps = dispatch => ({
    getCartItem: () => dispatch(getCartItem()),
    destroyCartItem: (cartItemId) => dispatch(destroyCartItem(cartItemId))

});

export default connect(mapStateToProps, mapDispatchToProps)(CartShow)