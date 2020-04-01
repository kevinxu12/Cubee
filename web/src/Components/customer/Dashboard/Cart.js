import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
                <div className="col-md-10 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">2</span>
                    </h4>
                    <ul className="list-group mb-5">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Kuvera</h6>
                                <small className="text-muted">Optimized, AI Portfolios</small>
                            </div>
                            <button type="submit" className="btn btn-secondary">Try</button> 
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Beyond</h6>
                                <small className="text-muted">A tool for productivity</small>
                            </div>
                            <button type="submit" className="btn btn-secondary">Try</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cart;