import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM} from '../actions/cart_actions';

const cartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cart_items;
        case RECEIVE_CART_ITEM:
            nextState[action.cart_item.id] = action.cart_item;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId]
            return nextState
        default:
            return oldState;
    }
}

export default cartReducer;