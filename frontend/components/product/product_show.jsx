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
            <div className="product_show">
                <h1 className="free-ship">Free Shipping on All Orders over $50!</h1>
                <header className="header">
                    <Link to="/" className="prod_path">HOME</Link>
                </header>
                <div className="prod_body">
                    <img className="item_image" src={window['prod' + product.id.toString()]} />
                    <div className="item_side">
                    <h1 className="show_name">{product.name}</h1>
                    <h1 className="show_price">${product.price}</h1>
                    <button className="add_cart">ADD TO CART</button>
                    </div>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <br/>
                    <h2>{product.description}</h2>
                </div>

            </div>
        )
    }
}



export default ProductShow;