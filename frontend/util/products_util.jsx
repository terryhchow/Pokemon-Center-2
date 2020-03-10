export const fetchAllProducts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/products'
    })
);

export const fetchProduct = (id) => {
    // debugger;
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
};