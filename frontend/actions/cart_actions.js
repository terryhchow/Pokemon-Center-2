import { fetchCartItems, createCartItems, deleteCartItems } from '../util/cart_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

const receiveCartItems = cart_items => ({
    type: RECEIVE_CART_ITEMS,
    cart_items
})

const receiveCartItem = (cart_item) => ({
    type: RECEIVE_CART_ITEMS,
    cart_item
})

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const getCartItems = () => dispatch => (
    fetchCartItems()
        .then(cart_items=> dispatch(receiveCartItems(cart_items)))
)

export const makeCartItems = (cart_item) => dispatch => (
    createCartItems()
        .then(cart_item => dispatch(receiveCartItem(cart_item)))
)

export const deleteCartItem = (cartItemId) => dispatch => (
    deleteCartItems()
        .then(cartItemId => dispatch(removeCartItem(cartItemId)))
)



