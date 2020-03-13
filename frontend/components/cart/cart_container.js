import React from 'react';
import { connect } from 'react-redux';
import CartForm from './cart'
import { getCartItems } from "../../actions/cart_actions";

const mapStateToProps = state => {
    return {
        currentUserId: state.session.id,
        products: Object.values(state.entities.products),
        currentUser: state.session.currentUser
    }

};

const mapDispatchToProps = dispatch => ({
    getCartItems: () => dispatch(getCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartForm)