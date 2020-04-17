import { fetchCartItems, createCartItems, deleteCartItems } from '../util/cart_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = payload => ({
    type: RECEIVE_CART_ITEMS,
    payload
})

const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEMS,
    cartItem
})

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const getCartItems = () => dispatch => (
    fetchCartItems()
        .then(payload=> dispatch(receiveCartItems(payload)))
)

export const makeCartItems = (cart_item) => dispatch => (
    createCartItems(cart_item)
        .then(cart_item => dispatch(receiveCartItem(cart_item)))
)

export const deleteCartItem = (cartItemId) => dispatch => (
    deleteCartItems()
        .then(cartItemId => dispatch(removeCartItem(cartItemId)))
)



