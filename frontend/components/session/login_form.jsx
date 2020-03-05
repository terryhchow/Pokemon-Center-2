import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="login-form">
                        <label>Email:
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <label>Password:
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <input className="session-submit" type="submit" value="Sign In" />
                    </div>
                </form>
                <h3>Don't have an account?</h3>
                <Link className="btn" to="/signup">Register</Link>
            </div>

        )
    }
}

export default LoginForm;