import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.products;
        this.state.search = ""
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestAllProducts();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.products;
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div>
            <textarea
                value=""
                onChange={this.update('search')}
            />
            <button onClick={this.handleSubmit}/>
            </div>
        );
    }
}

export default SearchBar;
