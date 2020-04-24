export const fetchCartItems = () => (
    $.ajax({
        method: 'GET',
        url: 'api/cart_items'
    })
);

export const createCartItems = (cart_item) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: 'api/cart_items',
        data: {cart_item}
    })
};


export const deleteCartItems = (cartId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/cart_items/${cartId}`
    })
);


