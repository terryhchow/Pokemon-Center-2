import React from 'react';
import { connect } from 'react-redux';
import ShowForm from './product_show'
import { requestProduct } from "../../actions/product_index_actions";
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { makeCartItems, getCartItems, updateCartItems} from "../../actions/cart_actions"


const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        product: state.entities.products[ownProps.match.params.productId],
        cart: Object.values(state.entities.cart)
        
    }
};

const mapDispatchToProps = dispatch => ({
    requestProduct: (productId) => dispatch(requestProduct(productId)),
    createCartItem: (cart_item) => dispatch(makeCartItems(cart_item)),
    updateCartItem: (cart_item) => dispatch(updateCartItems(cart_item)),
    getCartItems: () => dispatch(getCartItems()),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowForm))