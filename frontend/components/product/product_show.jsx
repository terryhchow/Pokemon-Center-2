import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component {
    componentDidMount() {
        this.props.requestProduct(this.props.match.params.productId);
    }
    render () {
        const { product } = this.props;
        if (!product) return null
        return (
            <div>
                <Link to="/products">Home</Link>
                <div>
                    <h1>Product Show Page</h1>
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>=
                </div>
                <div>
                    <h2>{product.description}</h2>
                </div>

            </div>
        )
    }
}



export default ProductShow;