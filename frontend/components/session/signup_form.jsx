import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            address: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="signup-form">
                 <h1>Register</h1>
                    <h3>Please provide the following information</h3>   
                    <h3>* denotes required fields</h3>   
                    <br/>
                <div>
                    <label>*Email:
                        <br/>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="signup-input"
                            />
                    </label>
                    <br/>
                    <label>*Password:
                        <br/>
                    <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-input"
                        />
                    </label>
                    <br/>
                    <label>*Name:
                        <br/>
                        <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className="signup-input"
                            />
                    </label>
                    <br/>
                    <label>Address:
                        <br/>
                        <input type="text"
                            value={this.state.address}
                            onChange={this.update('address')}
                            className="signup-input"
                            />
                    </label>
                    <br/>
                    <input className="session-submit" type="submit" value="Submit" />
                </div>
                </form>
            </div>

        )
    }
}

export default SignupForm;