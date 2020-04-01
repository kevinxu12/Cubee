import React, { Component } from 'react'
import RequiredInputForm from '../../Tools/RequiredInputForm';
import Toggle from 'react-bootstrap-toggle'
import './../../customer/Auth/Login.css'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './LinkProduct.css'
class LinkProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            email: '',
            password: '',
            toggleActive: true,
            errorMessage: ''
        }
        this.onToggle = this.onToggle.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    }
    onToggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
    }

    handleLoginSubmit() {
        console.log("Not done yet")
    }

    async handleSignupSubmit(e) {
        console.log("handling signup");
        e.preventDefault();
        console.log(this.props);
        var companyInfo = {
            name: this.state.companyName,
            password: this.state.password,
            email: this.state.email
        }
        var productInfo = this.props.history.location.state.productInfo;
        console.log(productInfo);
        var obj = {
            companyInfo: companyInfo,
            productInfo: productInfo
        }
        console.log("linking account");
        console.log("adding new company signup");
        const res = await axios.post('/api/createNewProductRequest', obj.productInfo);
        console.log(res);
        if (!res.data.error) {
            const res2 = await axios.post('/api/companySignup', obj.companyInfo);
            console.log(res2);
            if (!res2.data.error) {
                this.props.history.push("/pending_approval");
            } else {
                this.setState({errorMessage: res2.data.error})
            }
        } else {
           this.setState({errorMessage: res.data.error})
        }

    }
    renderLinkage() {
        if (this.state.toggleActive) {
            return (
                <div className="col-md-8 order-md-1">
                    <form onSubmit={this.handleSignupSubmit}>
                        <h4 className="mb-3">Company Information</h4>
                        <div className="row">
                            <RequiredInputForm label="Company Name"
                                value={this.state.companyName}
                                onChange={(event) => { this.setState({ companyName: event.target.value }) }}
                            />
                        </div>
                        <div className="row">
                            <RequiredInputForm label="Email"
                                type="email"
                                value={this.state.email}
                                onChange={(event) => { this.setState({ email: event.target.value }) }}
                            />
                        </div>
                        <div className="row">
                            <RequiredInputForm label="Password"
                                type="password"
                                value={this.state.password}
                                onChange={(event) => { this.setState({ password: event.target.value }) }}
                            />
                        </div>
                        <button className="btn btn-secondary"> Submit </button>
                    </form>
                    <div style = {{backgroundColor: "red"}} > {this.state.errorMessage}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <form className="form-signin" onSubmit={this.handleLoginSubmit}>
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
                    </form>
                </div>
            )
        }

    }
    render() {
        return (
            <div>
                <Toggle
                    onClick={this.onToggle}
                    on={<h2 style={{ backgroundColor: "#6c757d" }}>Signup</h2>}
                    off={<h2 style={{ backgroundColor: "#6c757d", color: "white" }}>Login</h2>}
                    size="xs"
                    active={this.state.toggleActive}
                />
                {this.renderLinkage()}
            </div>

        )
    }
}
export default withRouter(LinkProduct);