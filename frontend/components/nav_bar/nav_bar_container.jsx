import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import {requestAllProducts} from '../../actions/product_index_actions'

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    products: Object.values(state.entities.products)
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    requestAllProducts: () => dispatch(requestAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);