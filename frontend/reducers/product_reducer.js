import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_index_actions';

const productReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
            case RECEIVE_PRODUCT:
                // debugger
            // nextState[action.product.id] = action.product;
            // return nextState;
            return action.product;
        default:
            return oldState;
    }
}

export default productReducer;