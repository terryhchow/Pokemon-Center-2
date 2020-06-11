import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';
// import ProductIndexItem from "./product_index_item"

const SearchResults = ({ handleClear, searchItems }) => {
    if (searchItems.length === 0) return null;

    const resultItems = searchItems
        .map((product) =>
            <ProductIndexItem handleClick={handleClear} product={product} key={product.id}  />
        );

    return <div className="search-results">{resultItems}</div>;
}

export default SearchResults;

