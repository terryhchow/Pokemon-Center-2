import React from 'react';
import ProductIndexItem from '../product/product_index_item';


class Search extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestAllProducts();
    }

    render() {
        const { products, searchTerm } = this.props;
        
        if (searchTerm === undefined || searchTerm === '') return null;
        
        const findMatches = () => {
            let matches = []
            for (let i=0; i<props.products.length; i++) {
                if (product.name.includes(searchTerm) ) {
                    matches.push(product)
                }
            }
            return matches
        }
        findMatches()
        
        if (matches.length === 0) return null;

        const productIndexItems = this.matches.map((product) => (
            <div>
                <ProductIndexItem
                product={product}
                key={product.id}
                />
            </div>
        ));

        return (
            <div>
                <div>
                    <h1>SEARCH RESULTS FOR <span>"{this.props.searchTerm}"</span></h1>
                </div>
                <div className="results-container">
                    {productIndexItems}
                </div>
            </div>
        );
    }
}

export default Search
