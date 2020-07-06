import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestAllProducts } from "../../actions/product_index_actions";
import Search from './search';

const mapStateToProps = (state => {
    return {
        products: Object.values(state.entities.products),
        searchTerm: state.searchTerm
    }
});

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
