import React, { Component } from 'react'
import './Landing.css';
// this is the home page of the website.
// the home page contains directions to add a product or go to the marketplace as a non user.
class Landing extends Component {
    render() {
        // change the color of the links
        return (
            <div>
                <div className="position-relative overflow-hidden p-md-5 m-md-1 text-center bg-light" id="popout">
                    <div className="col-md-3 p-lg-3 mx-auto my-5">
                        <h1 className="display-4 font-weight-bold text-white">Cubee</h1>
                        <h4 className ="text-white">New products to you</h4>
                        <h5 className = "text-white" style = {{marginTop: "50px"}}>A vision of Penn students</h5> 
                    </div>
                    <div className="product-device box-shadow d-none d-md-block"></div>
                    <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>

                <div className="d-md-flex flex-md-equal w-101 pl-md-1">
                    <div className="bg-dark mr-md-1 pt-1 px-1 pt-md-5 px-md-1 text-center text-white overflow-hidden" id="half-page-article">
                        <div className="my-3 py-3">
                            <h2 className="display-5"><a href="/post">Add Your Product!</a></h2>
                        </div>
                        <div className="bg-light box-shadow mx-auto" id="inner-box"></div>
                    </div>
                    <div className="bg-dark mr-md-1 pt-1 px-1 pt-md-5 px-md-1 text-center text-white overflow-hidden" id="half-page-article">
                        <div className="my-3 py-3">
                            <h2 className="display-5"><a href="/dashboard">Market Place</a></h2>
                        </div>
                        <div className="bg-light box-shadow mx-auto" id="inner-box"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;