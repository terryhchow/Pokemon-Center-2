export const fetchCartItems = () => (
    $.ajax({
        method: 'GET',
        url: 'api/products'
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
        url: `api/products${cartId}`
    })
);


