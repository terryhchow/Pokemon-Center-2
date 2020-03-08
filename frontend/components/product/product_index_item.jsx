import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = (props) => {
    return (
        <div>
            <ul>
            <li>{props.product.name}</li>
            <li>{props.product.price}</li>
            {/* <Link to {`/products/${props.product.id}`}>{props.product.name}</Link> */}
            </ul>
        </div>
    )
}

export default ProductIndexItem