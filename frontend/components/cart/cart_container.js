import React from 'react';
import { connect } from 'react-redux';
import CartForm from './cart'
import { getCartItems } from "../../actions/cart_actions";

const mapStateToProps = state => {
    return {
        cart_items: Object.values(state.cart_items)
    }
};

const mapDispatchToProps = dispatch => ({
    getCartItems: () => dispatch(getCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm)