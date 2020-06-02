import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class AddedToCartForm extends React.Component {
    render() {
         return (
            <div>
                <h1 className="added-cart">Product added to cart</h1>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(AddedToCartForm);