import React from 'react';
import SearchResults from '../product/search_results';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.products;
        this.state = { search: '', searchItems: [] };
        this.search_item = this.search_item.bind(this);
    }

    componentDidMount() {
        this.props.requestAllProducts();
    }

    update(field) {
        console.log('searching items', e.currentTarget.value)
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    search_item() {
        for (let i = 0; i < props.products.length; i++) {
            let current_item = props.cart[i]
            if (current_item.name.toLowerCase().includes(this.state.search)) {
                this.state.search_items.push(current_item)
            }
        }
    }

    clear() {
        this.setState({ searchTerm: "", searchItems: [] });
    }

    render() {
        return (
            <div>
            <textarea
                value={this.state.search}
                onChange={this.update('search')}
            />
            <button onClick={this.search_item}/>
            <SearchResults
            handleClear={this.clear}
            searchItems={this.state.searchItems}
            update={this.update}
            products={this.props.products}
            />
            </div>
        );
    }
}

export default SearchBar;
