import React, { Component } from 'react'
import './Header.css';
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
// this class contains the navbar header that every page will have
class Header extends Component {
    renderContent() {
        var path = this.props.location.pathname;
        if(path === "/") {
            return ([
                <li key = "1" className = "nav-item text-white"><a href = '/login'>Login</a></li>,
                <li key = "2" className = "nav-item text-white"><a href = '/signup'>Sign up</a></li>
            ]
            );
        // if you login/signup or are posting
        } else if (path === "/login" || path === "/post" || path === "/signup") {
            return ([
              <li key = "1" className = "nav-item text-white"><a href = '/'>Home</a></li>
            ])
        // if you have clicked on specific company
        } else if (path.includes("/company/"))
        {
          return ([
            <li key = "1" className = "nav-item text-white"><a href = '/'>Home</a></li>,
            <li key = "2" className = "nav-item text-white"><a href = '/dashboard'>Back</a></li>
          ])
        } else if (this.props.auth){
            return ([
                <li key = "1" className = "nav-item text-white"><a href = '/logout'>Logout</a></li>
            ])
        // need to implement logout
        } else if (this.props.companyAuth) {
          return ([
            <li key = "1" className = "nav-item text-white"><a href = "/companyLogout"> Logout </a></li>
          ])
        } else {
          return ([
            <li key = "1" className = "nav-item text-white"><a href = '/'>Home</a></li>
        ])
        }
    }
    render() {
        return (
            <div>
                <header>
                <div className="navbar navbar-default navbar-dark bg-dark box-shadow">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <div className="container d-flex justify-content-between">
                        <div className="navbar-brand  d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                          <strong>Cubee</strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <ul className="navbar-nav" style = {{display: "inline-block"}}>
                        {this.renderContent()}
                    </ul>
                  </div>
                </div>
              </header>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return ({
    auth: state.auth,
    companyAuth: state.companyAuth
  })
}

export default connect(mapStateToProps, null)(withRouter(Header));