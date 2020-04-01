import React, { Component } from 'react'

class OptionalInputForm extends Component {
    render() {
        return (
            <div className="mb-3">
                <label>{this.props.label}<span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="lastName" placeholder="" value={this.props.value}
                onChange = {this.props.onChange} />
            </div>
        )
    }
}

export default OptionalInputForm