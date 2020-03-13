import React from 'react';
import { connect } from 'react-redux';
import ShowForm from './product_show'
import { requestProduct } from "../../actions/product_index_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return{
        product: state.entities.products[ownProps.match.params.productId]
    }
};

const mapDispatchToProps = dispatch => ({
    requestProduct: (productId) => dispatch(requestProduct(productId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowForm))