import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LogoutForm from './logout_form';


const mapDispatchToProps = dispatch => {
    return {
        logout: (user) => dispatch(logout(user)),
        closeModal: () => dispatch(closeModal()),
        formType: 'logout',
    };
};

export default connect(null, mapDispatchToProps)(LogoutForm);