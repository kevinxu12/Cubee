import React, { Component } from 'react'
import RequestCard from './RequestCard';
import { connect } from 'react-redux';
import { getTopFiveProductRequests, rejectRequest, acceptRequest} from './../../actions/index';
// the goal of the dashboard is to build a page where admins can approve pending new product requests or reject them
class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        }
        this.acceptRequest = this.acceptRequest.bind(this);
        this.rejectRequest = this.rejectRequest.bind(this);
    }
    // move to this react routers
    async componentDidMount() {
        await this.props.getTopFiveProductRequests();
    }
    // to do: need to be able to reject request
    rejectRequest(id) {
        this.props.rejectRequest(id);
    }
    // do not bind accept and reject
    acceptRequest(obj) { 
        this.props.acceptRequest(obj);
    }
    // renders pending requests
    renderRequests() {
        console.log(this.props.requests);
        return this.props.requests.map((obj) => {
            return <RequestCard name = {obj.name} id = {obj._id} key = {obj._id}
            name = {obj.name} 
            discountName = {obj.discountName} 
            attributes = {obj.attributes}
            onAccept = {this.acceptRequest}
            onReject = {this.rejectRequest}/>
        })
    }

    render() {
        return (
            <div>
                {this.renderRequests()}
            </div>
        )
    }
}
const mapDispatchToProps = {
    getTopFiveProductRequests,
    rejectRequest,
    acceptRequest
}

function mapStateToProps (state) {
    return { requests: state.requests }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);