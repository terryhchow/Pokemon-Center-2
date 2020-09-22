import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_index_actions';
import { RECEIVE_CART_ITEMS } from '../actions/cart_actions';

const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            return action.product;
        case RECEIVE_CART_ITEMS:
            if (action.payload && action.payload.products) {
                return action.payload.products;
            } else {
                return oldState
            }
        default:
            return oldState;
    }
}

export default productReducer;