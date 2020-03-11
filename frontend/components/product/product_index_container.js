import React from 'react';
import { connect } from 'react-redux';
import IndexForm from './product_index'
import { requestAllProducts } from "../../actions/product_index_actions";

const mapStateToProps = state => {
    return {
        products: Object.values(state.products)
    }
};

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexForm)