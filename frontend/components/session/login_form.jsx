import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
    render() {
        return (
            <div className="login_form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className="form_text">Email:
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <label className="form_text">Password:
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value="Sign In" />
                    </div>
                </form>
                <h3 className="form_text">Don't have an account?</h3>
                <Link to="/signup"><button className="btn">Register</button></Link>
            </div>

        )
    }
}

export default LoginForm;