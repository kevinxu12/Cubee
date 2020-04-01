import axios from "axios";
import {FETCH_COMPANY} from './../types'
// need to do product sign up flow with verification email
export const companyLogin = (obj, history) => async dispatch => {
    console.log("logging in company");
    const res = await axios.post('/api/companyLogin', obj);
    if(!res.data.error) {
        history.push("/company_dashboard/" + res.data);
    }
    // change this to fetch company. Need to do entire auth flow for company
    dispatch({type: FETCH_COMPANY, payload: res.data})
}
// IMPORTANT NEED TO ENSURE THE RES RETURNED IS THE NAME OF THE COMPANY
export const fetchCompany = () => async dispatch  => {
    const res = await axios.get('/api/currentCompany');
    dispatch({ type: FETCH_COMPANY, payload: res.data }); 
};

export const companyLogout = (history) => async dispatch => {
    console.log("logging out");
    history.push("/");
    axios.get('/api/companyLogout');
    dispatch({type: FETCH_COMPANY, payload: false});
}
