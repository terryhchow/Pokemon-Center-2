import React from 'react';


class LogoutForm extends React.Component {
    render() {
        return(
        <div>
            <button onClick={this.props.logout}>SIGN OUT</button>
        </div>)
    }
};

export default LogoutForm;