import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const cart = Object.assign({}, this.state);
        this.props.processForm(cart);
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="add_to_cart">
                {this.state.email}
    
                <input className="session-submit" type="submit" value="Submit" />
                
            </form>
            </div>

        )
    }
}

export default SignupForm;