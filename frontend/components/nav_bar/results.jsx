import React from 'react';
import ProductIndexItem from '../product/product_index_item';
import ResultItem from './result_item';

const Results = ({ handleClear, searchItems }) => {
    if (searchItems.length === 0) return null;
    const resultItems = searchItems
        .map((product, i) =>
            <ResultItem handleClick={handleClear} key={i} product={product} />
        );
    return <div className="search-results">{resultItems}</div>;
}

export default Results;
