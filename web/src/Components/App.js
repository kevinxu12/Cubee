import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './customer/Dashboard/Dashboard'
import Landing from './Landing/Landing'
import Header from './Header/Header'
import Login from './customer/Auth/Login'
import Signup from './customer/Auth/Signup'
import AddProduct from './business/Post/AddProduct'
import Logout from './customer/Auth/Logout'
import VerificationPage from './business/Post/VerificationPage'
import AdminDashboard from './admin/AdminDashboard';
import CompanyDetails from './business/CompanyDetails';
import LinkProduct from './business/Post/LinkProduct';
import ProductDashboard from './business/Dashboard/ProductDashboard';
import ProductDashboardEntrance from './business/Dashboard/ProductDashboardEntrance';

class App extends Component {
    render () {
        return ( 
            <div>
                <BrowserRouter>
                    <Header />
                    <Route path = "/company_dashboard/:id" component = {ProductDashboard}/>
                    <Route path = "/link_product" component = {LinkProduct}/>
                    <Route path = "/pending_approval" component = {VerificationPage}/>
                    <Route path = "/logout" component = {Logout} />
                    <Route path = "/signup" component = {Signup} />
                    <Route path = "/login" component = {Login} />
                    <Route exact path = "/" component = {Landing} />
                    <Route path = "/company/:id" component = {ProductDashboardEntrance}/>
                    <Route path = "/details/:id" component = {CompanyDetails} />
                    <Route path = "/dashboard" component = {Dashboard} />
                    <Route path = "/post" component = {AddProduct} />
                    <Route path = "/admin" component = {AdminDashboard} />
                </BrowserRouter>
            </div>
            
        )
    }
}
export default App;