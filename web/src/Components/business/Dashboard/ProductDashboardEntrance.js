import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { companyLogin, fetchCompany } from './../../../actions/index';

class ProductDashboardEntrance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    async componentDidMount() {
        await this.props.fetchCompany(); 
        // if you're still logged in lets redirect you
        if(this.props.companyAuth) {
            this.props.history.push("/company_dashboard/" + this.props.companyAuth)
        } 
    }
    async handleLoginSubmit(e) {
        e.preventDefault();
        console.log("logging in as company");
        var obj = {
            email: this.state.email,
            password: this.state.password
        }
        await this.props.companyLogin(obj, this.props.history);
        if (this.props.companyAuth.error) {
            this.setState({errorMessage: this.props.auth.error})
            // company auth should contain the name of the company
        } else if (this.props.companyAuth) {
            this.props.history.push('/companyDashboard' + this.props.companyAuth);
        } 

    }
    render() {
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
function mapStateToProps(state) {
    return {
        companyAuth: state.companyAuth
    }
}
const mapDispatchToProps = {
    companyLogin,
    fetchCompany
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDashboardEntrance));