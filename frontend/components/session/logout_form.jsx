import React from 'react';


class LogoutForm extends React.Component {
    render() {
        return(
        <div className="logout_form">
            <button className="logout_button" onClick={this.props.logout}>SIGN OUT</button>
        </div>)
    }
};

export default LogoutForm;