import React from 'react';
import { connect } from 'react-redux';
import AddToCart from './add_to_cart_form'
import { makeCartItems } from "../../actions/cart_actions";

const mapStateToProps = state => {
    return {
        // currentUserId: state.session.id,
        // products: Object.values(state.entities.products),
        product: state.entities.products.id,
        currentUser: state.session.currentUser.id,
        cart_item: state.entities.cart
    }

};

const mapDispatchToProps = dispatch => ({
    getCartItems: (cart_item) => dispatch(makeCartItems(cart_item))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)