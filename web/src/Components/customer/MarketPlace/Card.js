import React, { Component } from 'react';
import './Card.css'
import { withRouter } from 'react-router'
class Card extends Component {
    constructor(props) {
        super(props);
        this.moreInfo = this.moreInfo.bind(this);
        this.renderAttributes = this.renderAttributes.bind(this);
    }
    renderAttributes() {
        return this.props.attributes.map((el) => {
            return <li key = {el}>{el} </li>
        });
    }

    moreInfo() {
        var id= this.props.id;
        console.log("redirecting for more info for " + id);
        this.props.history.push('/company/' + id);
    }

    renderUserFeatures() {
        if (this.props.isLoggedIn) {
            return <button type="button" id="addCart" className="btn btn-lg btn-block btn-secondary">Add to Favorites</button>;
        }
    }
    render() {
        return (
            <div className="row">
                <div className="card box-shadow" id="container">
                    <div className="card-body">
                        <h4 id="title" className="my-0 font-weight-normal">{this.props.name}</h4>
                        <h1 className="card-title pricing-card-title">{this.props.discountName}</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            {this.renderAttributes()}
                        </ul>
                        {this.renderUserFeatures()}
                        <button type="button" id="getStarted" className="btn btn-lg btn-block btn-primary" onClick={this.moreInfo}>Get started</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Card);