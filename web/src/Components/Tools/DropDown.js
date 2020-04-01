import React, { Component } from 'react'

class DropDown extends Component {
    render() {
        return (
            <div className="col-md-5 mb-3">
                <label>{this.props.name}</label>
                <select className="custom-select d-block w-100" id="country" required>
                    {this.props.options}
                </select>
            </div>
        )
    }
}

export default DropDown;