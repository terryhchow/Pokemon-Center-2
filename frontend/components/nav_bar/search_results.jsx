import React from 'react';
import ProductIndexItem from '../product/product_index_item';

class SearchResults extends React.Component {
    componentDidMount() {
        this.props.requestAllProducts();
    }

    render() {
        const { products, searchTerm } = this.props;

        if (searchTerm === undefined || searchTerm === '') return null;
        if (products.filter(product => product !== undefined).length === 0) return null;

        const productSearchItems = this.props.products.map((product, i) => (
            <div key={product._id}>
                <ProductIndexItem index={i + 1} product={product} />
            </div>
        ));

        return (
            <div className="search-results">
                <div className="header-container">
                    <h1 className="results-header">Results for <span className="term">"{this.props.searchTerm}"</span></h1>
                    <span className="underline"></span>
                </div>
                <div className="results-container">
                    {productSearchItems}
                </div>
            </div>
        );
    }
}

export default SearchResults
