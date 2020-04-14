import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    return (
        <div className="cart_index_item">
            <Link to={`/products/${props.product.id}`} className="cart-item">
                <img className="cart-item_image" src={window['prod' + props.product.id.toString()]} />
            </Link>
            <span>
                <h1 className="cart-name">{props.product.name}</h1>
                {/* <h1 className="cart-quantity">{props.cart.quantity}</h1> */}
                <h1 className="cart-price">{props.product.price}</h1>
                {/* <h1 className="cart-total">{props.product.price*props.cart.quantity}</h1> */}
            </span>
                <button className="remove-item" onClick={()=>props.deleteCartItem(props.product.id)}>Remove</button>
        </div>
    )
}

export default CartIndexItem

// class CartIndexItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             this.product = {props.product}
//             this.cart = {props.cart}
//             this.handleSubmit = this.handleSumbit.bind(this)
//         }
//     }
//     handleSubmit(e) {

//     }
// }