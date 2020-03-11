import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_index_actions';

const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return action.product;
        default:
            return oldState;
    }
}

export default productReducer;