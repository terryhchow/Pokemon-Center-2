import React from 'react';
import { Link } from 'react-router-dom';
import { throws } from 'assert';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this)
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
    handleDemo(e) {
        e.preventDefault();
        const demo = {
            email: "pika@chu.com",
            password: "password"
        }
        this.props.processForm(demo)
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors}
            </ul>
        );
    }
    render() {
        return (
            <div className="login_form">
                <form onSubmit={this.handleSubmit}>
                {this.renderErrors()}
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
                <button className="btn" onClick={this.handleDemo}>Demo</button>
            </div>

        )
    }
}

export default LoginForm;