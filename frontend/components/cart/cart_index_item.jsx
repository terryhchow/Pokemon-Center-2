import React from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = (props) => {
    const handleDelete = (cartId) => {
        props.destroyCartItem(cartId)
            .then(window.location.reload())
    } 
    let foundId
    let foundProduct
    const findProduct = () => {
        for (let i=0; i<props.cart.length; i++) {
            let current_item = props.cart[i]
            if (current_item.product_id === props.product.id) {
                foundId = current_item.id
                foundProduct=current_item
            }
        }
        return foundId
    }
    findProduct()
    return (
        <div className="cart_index_item">
            <Link to={`/products/${props.product.id}`} className="cart-item">
                <img className="cart-item_image" src={window['prod' + props.product.id.toString()]} />
            </Link>
            {/* <span className="cart-details"> */}
                <h1 className="cart-name">{props.product.name}</h1>
                <h1 className="cart-quantity">{foundProduct.quantity}</h1>
                <h1 className="cart-price">{props.product.price}</h1>
                <h1 className="cart-total">{props.product.price*foundProduct.quantity}</h1>
                <button className="remove-item" onClick={() => handleDelete(foundId)}>x Remove</button>
            {/* </span> */}
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