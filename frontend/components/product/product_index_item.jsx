import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
    const prod_id = props.product.id
    return (
        <div className="product_index_item">
            <ul>
            <Link to ={`/products/${props.product.id}`} className="item">
                <img className="item_img" src={window['prod' + prod_id.toString()]} />
                <br/>
                <li>{props.product.name}</li>
                <br/>
                <li className="price">${props.product.price}</li>
                </Link>
            
            </ul>
        </div>
    )
}

export default ProductIndexItem