import React from 'react';
import ProductIndexItem from './product_index_item';

class IndexForm extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestAllProducts();
    }

    render() {
        const { products } = this.props;
        return(
             <div>
                <header>
                <h1>HOME</h1>
                </header>
                <div> {
                    products.map(product => <ProductIndexItem product={product} key={product.id}/>)
                    }
                </div>
            </div>
        )
    }
}

export default IndexForm;