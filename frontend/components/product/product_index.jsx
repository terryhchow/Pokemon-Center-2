import React from 'react';
import ProductIndexItem from './product_index_item';
import { Link } from 'react-router-dom';

class IndexForm extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestAllProducts();
    }

    render() {
        const { products } = this.props;
        if (!products) return null
        if (products.length === 0)
            return null;
        return(
             <div className="product_index"> 
                <header className = "header">
                    <Link to="/" className="prod_path">HOME</Link>
                </header>
                <div className="prod_block"> {
                    products.map(product => <ProductIndexItem product={product} key={product.id}/>)
                    }
                </div>
            </div>
        )
    }
}

export default IndexForm;