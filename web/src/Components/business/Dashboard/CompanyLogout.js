import React, { Component } from 'react';
import { connect } from 'react-redux';
import { companyLogout } from './../../../actions/index';
import { withRouter } from 'react-router-dom';
class Logout extends Component {
    componentDidMount() {
        this.props.logout(this.props.history);
    }
    render () {
        return (
            <div>
                dumb
            </div>
        )
    }
}

const matchDispatchToProps  = {
    companyLogout
}
export default connect(null ,matchDispatchToProps)(withRouter(Logout));