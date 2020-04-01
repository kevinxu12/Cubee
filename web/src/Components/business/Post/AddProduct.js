import React, { Component } from 'react'
import './AddProduct.css'
import RequiredInputForm from '../../Tools/RequiredInputForm';
import OptionalInputForm from '../../Tools/OptionalInputForm';
import DropDown from './../../Tools/DropDown'
import { addProduct } from './../../../actions/index'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// need to work on this
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            discountName: '',
            attributes: '',
            address: '',
            toggleActive: false
        }
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
    }

    // change the render of product posts for software hardware
    render() {
        var typeOptions = [
            <option value="software" key="1">Software</option>,
            <option value="hardware" key="2">Hardware</option>]
        return (
            <div className="row">
                <div className="container">
                    <DropDown name="type" options={typeOptions} />
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Product Information</h4>
                        <form className="needs-validation" onSubmit={(e) => {
                            console.log("submitted");
                            e.preventDefault();
                            var obj = {
                                name: this.state.name,
                                description: this.state.description,
                                discountName: this.state.discountName,
                                attributes: this.state.attributes,
                                address: this.state.address
                            }
                            this.props.addProduct(obj, this.props.history)
                        }}>
                            <div className="row">
                                <RequiredInputForm label="Product Name"
                                    value={this.state.name}
                                    onChange={(event) => { this.setState({ name: event.target.value }) }}
                                />
                                <RequiredInputForm label="Product Description"
                                    value={this.state.description}
                                    onChange={(event) => { this.setState({ description: event.target.value }) }}
                                />
                            </div>

                            <OptionalInputForm label="Discount Type"
                                value={this.state.discountName}
                                onChange={(event) => { this.setState({ discountName: event.target.value }) }} />

                            <OptionalInputForm label="Attribute 1"
                                value={this.state.attributes}
                                onChange={(event) => { this.setState({ attributes: event.target.value }) }} />

                            <div className="row">
                                <RequiredInputForm label="Address"
                                    type="address"
                                    value={this.state.address}
                                    onChange={(event) => { this.setState({ address: event.target.value }) }} />
                                <div className="col-md-4 mb-3">
                                    <label>State</label>
                                    <select className="custom-select d-block w-100" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-secondary"> Submit </button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
const matchDispatchToProps = {
    addProduct
}
export default connect(null, matchDispatchToProps)(withRouter(AddProduct));