export const fetchCartItems = () => (
    $.ajax({
        method: 'GET',
        url: 'api/products'
    })
);