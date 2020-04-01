import React, { Component } from 'react'
import './Login.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, fetchUser } from './../../../actions/index';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async componentDidMount() {
        await this.props.fetchUser(); 
        // if you're still logged in lets redirect you
        if(this.props.auth) {
            this.props.history.push("/dashboard")
        } 
    }
    async handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted login");
        var obj = {
            email: this.state.email,
            password: this.state.password
        }
        await this.props.login(obj, this.props.history);
        if (this.props.auth.error) {
            this.setState({errorMessage: this.props.auth.error})
        } else if (this.props.auth) {
            this.props.history.push('/dashboard');
        } 
    }

    renderErrorMessage() {
        if (this.state.errorMessage) {
            return (
                <div style={{ color: "red" }}>{this.state.errorMessage}</div>
            )
        }
    }

    render() {
        return (
            <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" value={this.state.email} onChange={(event) => {
                        this.setState({ email: event.target.value })
                    }} className="form-control" placeholder="Email address" required autoFocus />

                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" value={this.state.password} onChange={(event) => {
                        this.setState({ password: event.target.value })
                    }} className="form-control" placeholder="Password" required />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    {this.renderErrorMessage()}
                </form>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = {
    login,
    fetchUser
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));