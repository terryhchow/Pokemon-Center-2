export const fetchCartItems = () => (
    $.ajax({
        method: 'GET',
        url: 'api/cart_items'
    })
);

export const createCartItems = (cartId) => (
    $.ajax({
        method: 'POST',
        url: 'api/products',
        data: {cartId}
    })
);


export const deleteCartItems = (cartId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/cart_items/${cartId}`
    })
);


