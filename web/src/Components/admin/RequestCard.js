import React, { Component } from 'react'
// this is a "card" representing a product request.
// It has a request and accept button
class RequestCard extends Component {
    render () {
        return <div>
            <div> name: {this.props.name} </div>
            <div> id: {this.props.id} </div>
            <button onClick = {() => {
                var obj = {
                    id: this.props.id,
                    name: this.props.name,
                    attributes: this.props.attributes,
                    discountName: this.props.discountName
                }
                this.props.onAccept(obj);
            }}> Accept </button>
            <button onClick = {() => {
                var id = this.props.id;
                this.props.onReject(id);
            }}> Reject </button>
        </div>
    }
}

export default RequestCard