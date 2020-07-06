import React from 'react';
import Results from './results';
import { Link } from 'react-router-dom';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '', searchItems: [] };
        this.filterSearch = this.filterSearch.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        this.props.requestAllProducts();
    }

    clear() {
        this.setState({ searchTerm: "", searchItems: [] });
    }

    filterSearch(e) {
        const searchTerm = e.target.value;
        const searchString = e.target.value.toUpperCase();
        const searchItems = this.props.products
            .map(product => {
                product.string = `${product.name} (${product.id})`;
                return product;
            })
            .filter(
                product => {
                    return(
                    product.string.toUpperCase().includes(searchString))});
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
                    type="text"
                    placeholder=" Search Pikachu, Plush, T-Shirts..."
                    />
                    <Link className="search_icon"
                        onClick={this.props.clear}
                        to={{
                            pathname: `/search/${this.state.searchTearm}`,
                            state: {
                                searchTerm: this.state.searchTerm
                            }
                    }}>
                        <img src={window.search_icon}/>
                </Link>
                </div>
                <Results
                    searchItems={this.state.searchItems}
                    handleClear={this.clear}
                    products={this.props.products}
                />
            </div>
        );
    }
}


export default SearchBar;
