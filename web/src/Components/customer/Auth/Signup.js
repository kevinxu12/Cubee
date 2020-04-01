import React, { Component } from 'react'
import RequiredInputForm from './../../Tools/RequiredInputForm'
import { signup, fetchUser } from './../../../actions/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            errorMessage: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handle redirect if logged in
    async componentDidMount() {
        await this.props.fetchUser();
        // if you're still logged in lets redirect you
        if (this.props.auth) {
            this.props.history.push("/dashboard")
        }
    }

    async handleSubmit(e) {
        console.log("new user submission");
        e.preventDefault();
        await this.props.signup(this.state, this.props.history);
        this.setState({ errorMessage: this.props.auth.error });
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
            <div className="row">
                <div className="container">
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">New User</h4>
                        <form className="needs-validation" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <RequiredInputForm label="First name"
                                    type="firstname"
                                    value={this.state.firstname}
                                    onChange={(event) => { this.setState({ firstname: event.target.value }) }}
                                />
                                <RequiredInputForm label="Last name"
                                    value={this.state.lastname}
                                    onChange={(event) => { this.setState({ lastname: event.target.value }) }}
                                />
                            </div>
                            <RequiredInputForm label="Email"
                                type="email"
                                value={this.state.email}
                                onChange={(event) => { this.setState({ email: event.target.value }) }}
                            />
                            <RequiredInputForm label="Password"
                                type="password"
                                value={this.state.password}
                                onChange={(event) => { this.setState({ password: event.target.value }) }}
                            />
                            <button className="btn btn-secondary"> Submit </button>
                        </form>
                        {this.renderErrorMessage()}
                    </div>
                </div>
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
    signup,
    fetchUser
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));