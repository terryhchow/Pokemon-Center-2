import React from 'react';
import { Link } from 'react-router-dom';


// class ProductIndexItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handeClick() {
//         const productId = this.props.product.id
//         this.props.histpry.push(`/products/${productId}`)
//     }
//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 <span>{ props.product.name }</span>
//                 <span>{ props.product.price }</span>
//             </div>
//         )
//     }
// }




const ProductIndexItem = (props) => {
    return (
        <div className="product_index_item">
            <ul>
            <Link to ={`/products/${props.product.id}`}>
                <img className="item_image" src={`window.prod${props.product.id}`} />
                {props.product.name}
                {props.product.price}
                </Link>
            
            <li>{props.product.price}</li>
            </ul>
        </div>
    )
}

export default ProductIndexItem