import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM} from '../actions/cart_actions';

const cartReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.payload.cartItems;
        case RECEIVE_CART_ITEM:
            nextState[action.cartItem.id] = action.cartItem;
            return nextState;
        case REMOVE_CART_ITEM:
            delete nextState[action.cartItemId.id]
            return nextState
        default:
            return oldState;
    }
}

export default cartReducer;