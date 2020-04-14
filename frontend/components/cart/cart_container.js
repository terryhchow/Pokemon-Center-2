import React from 'react';
import { connect } from 'react-redux';
import CartForm from './cart'
import { getCartItems, deleteCartItem } from "../../actions/cart_actions";

const mapStateToProps = state => {
    return {
        currentUserId: state.session.id,
        products: Object.values(state.entities.products),
        currentUser: state.session.currentUser,
        cart: Object.values(state.entities.cart)
    }

};

const mapDispatchToProps = dispatch => ({
    getCartItems: () => dispatch(getCartItems()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId))

});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm)