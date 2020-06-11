import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar'
import { requestAllProducts } from '../../actions/product_index_actions'

const mapStateToProps = (state) => ({
    products: Object.values(state.entities.products)
});

const mapDispatchToProps = (dispatch) => ({
    requestAllProducts: () => dispatch(requestAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);