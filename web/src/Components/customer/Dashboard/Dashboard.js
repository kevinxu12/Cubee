import React, { Component } from 'react';
import './Dashboard.css';
import Cart from './Cart'
import Updates from './Updates'
import MarketPlace from '../MarketPlace/MarketPlace';
import { connect } from 'react-redux';
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      cartOpen: false,
      marketPlaceOpen: true,
      update: false
    };
    this.openCart = this.openCart.bind(this);
    this.openMarketplace = this.openMarketplace.bind(this);
    this.renderDashboard = this.renderDashboard.bind(this);
    this.openUpdates = this.openUpdates.bind(this)
  }

  openCart() {
    this.setState({ cartOpen: true, marketPlaceOpen: false, update: false });
  }

  openMarketplace() {
    this.setState({ cartOpen: false, marketPlaceOpen: true, update: false });
  }

  openUpdates() {
    this.setState({ cartOpen: false, marketPlaceOpen: false, update: true });
  }

  renderDashboard() {
    const isCartOpen = this.state.cartOpen;
    const isMarketPlaceOpen = this.state.marketPlaceOpen;
    const isUpdateOpen = this.state.update;
    let mainPage;
    if (isCartOpen) {
      mainPage = <Cart />
      // refactor
    } else if (isMarketPlaceOpen) {
      mainPage = <MarketPlace />
    } else if (isUpdateOpen) {
      mainPage = <div><Updates /></div>
    }
    return mainPage;
  }

  renderSideNav() {
    // for test
    var user = this.props.auth;
    if (user) {
      return (
        <div className="row">
          <div className="vertical-nav bg-white" id="sidebar">
            <div className="py-4 px-4 mb-3">
              <div className="media-body">
                <h4 className="m-0">{user.firstname}</h4>
                <p className="font-weight-light text-muted mb-0">{user.firstname}</p>
              </div>
            </div>

            <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

            <ul className="nav flex-column bg-white mb-0">
              <li className="nav-item">
                <div onClick={this.openMarketplace}>
                  <a className="nav-link text-dark">
                    <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                    Marketplace
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <div onClick={this.openCart}>
                  <a  className="nav-link text-dark">
                    <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                    Cart
                        </a>
                </div>
              </li>
              <li className="nav-item">
                <div onClick={this.openUpdates}>
                  <a className="nav-link text-dark">
                    <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                    Update Information
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    } 
  }

  render() {
    return (
      <div>
        {this.renderSideNav()}
        <div className="page-content p-5" id="content">
          {this.renderDashboard()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    auth: state.auth
  };
}

export default connect(mapStateToProps, null)(Landing);