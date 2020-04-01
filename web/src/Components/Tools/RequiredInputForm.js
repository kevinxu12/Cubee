import React, { Component } from 'react'

class RequiredInputForm extends Component {
    renderInput() {
        if(this.props.type) {
            return <input type="text" className="form-control" id={this.props.type} placeholder="" value={this.props.value} onChange = {this.props.onChange} required />
        } else {
            return <input type="text" className="form-control" placeholder="" value={this.props.value} onChange = {this.props.onChange} required />
        }
    }
    render () {
        return (
            <div className="col-md-6 mb-3">
                <label>{this.props.label}</label>
                {this.renderInput()}
                <div className="invalid-feedback">
                    {this.props.label} is required
                </div>
            </div>
        )
    }
}

export default RequiredInputForm