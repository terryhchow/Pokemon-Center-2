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
                <label>Nav Bar</label>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h1>Register</h1>
                    <h3>Please provide the following information</h3>
                    <div className="login-form">
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                />
                        </label>
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                />
                        </label>
                        <input className="session-submit" type="submit" value="Sign In" />
                    </div>
                </form>
                <Link className="btn" to="/signup">REGISTER</Link>
            </div>

        )
    }
}

export default LoginForm;