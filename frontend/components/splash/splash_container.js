import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
    user: state.session.currentUser
});

export default connect(mapStateToProps)(Splash);