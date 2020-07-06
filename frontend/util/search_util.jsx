export const getSearchResults = (searchTerm) => (
    $.ajax({
        url: `/api/search/${searchTerm}`,
        method: "GET"
    })
)