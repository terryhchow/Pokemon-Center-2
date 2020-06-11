import React from 'react';
import Results from './results';
import SearchResults from '../product/search_results';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '', searchItems: [] };
        this.filterSearch = this.filterSearch.bind(this);
        this.search = this.search.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        this.props.requestAllProducts();
    }

    search() {
        if (this.state.searchTerm === '') return;
        if (this.state.searchItems.length === 0) return;
        // <SearchResults 
        //     searchItems = {this.state.searchItems}
        // />

        this.clear();
    }

    clear() {
        this.setState({ searchTerm: "", searchItems: [] });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') this.search();
    }

    filterSearch(e) {
        const searchTerm = e.target.value;
        const searchString = e.target.value.toUpperCase();
        const searchItems = this.props.products
            .map(product => {
                product.string = `${product.name} (${product.id})`;
                return product;
            })
            .filter(product => product.string.toUpperCase().includes(searchString));

        if (searchItems.length === this.props.products.length)
            this.setState({ searchTerm, searchItems: [] });
        else
            this.setState({ searchTerm, searchItems });
    }

    render() {
        return (
            <div className="search-bar-whole">
                <div className="search-bar-container">

                <input
                    className="search-bar"
                    value={this.state.searchTerm}
                    onChange={this.filterSearch}
                    onKeyDown={this.handleKeyDown}
                    type="text"
                    placeholder=" Search Pikachu, Plush, T-Shirts..."
                    />
                <img onClick={this.search} className="search_icon" src={window.search_icon}></img>
                </div>
                <Results
                    handleClear={this.clear}
                    searchItems={this.state.searchItems}
                    products={this.props.products}
                />
            </div>
        );
    }
}


export default SearchBar;
