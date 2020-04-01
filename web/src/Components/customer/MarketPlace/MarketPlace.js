import React, { Component } from 'react'
import Card from './Card'
import './MarketPlace.css'
import { connect } from 'react-redux'
import { getTopFiveNewProducts, fetchUser } from './../../../actions/index';
// the market place is sort of supposed to mirror product hunts front page
class MarketPlace extends Component {
    constructor(props) {
        super(props);
        // these are two default objects for testing
        // var kuveraObject = {
        //     attributes: ['Get priority customer support'],
        //     name: 'Kuvera',
        //     discountName: 'First month off'
        // }
        // var jdObject = {
        //     attributes: ['Marketplace for you'],
        //     name: 'JD',
        //     discountName: '5% off per month'
        // }
        this.state = {
            //products: [kuveraObject, jdObject]
            products: []
        }
    }
    async componentDidMount() {
        await this.props.fetchUser();
        await this.props.getTopFiveNewProducts();
        const products = this.props.products;
        this.setState({
            products : this.state.products.concat(products)
        }, () => {
        });
    }
    // renders all the cards for the products
    renderCards() {
        return this.state.products.map((obj) => {
            return <Card name = {obj.name} 
            attributes = {obj.attributes}
            discountName = {obj.discountName || "None"}
            key={obj.name}
            id = {obj._id}
            isLoggedIn = {this.props.auth}
            />
        })
    }
    render() {
        
        return (
            <div className = "marketPlace">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Market place</h1>
                    <p className="lead">Welcome back! The following products are recommended</p>
                </div>
                <div className = "container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { 
      auth: state.auth,
      products: state.products
    };
  }

const mapDispatchToProps = {
    getTopFiveNewProducts,
    fetchUser
}
export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);