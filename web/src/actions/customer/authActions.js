import axios from 'axios';
import {FETCH_USER, ADD_USER} from './../types'

export const logout = (history) => async dispatch => {
    console.log("logging out");
    history.push("/");
    axios.get('/api/userLogout');
    dispatch({type: FETCH_USER, payload: false});
}

export const fetchUser = () => async dispatch  => {
    const res = await axios.get('/api/currentUser');
    dispatch({ type: FETCH_USER, payload: res.data }); 
};

export const signup = (obj, history) => async dispatch => {
    console.log("adding new user");
    const res = await axios.post('/api/userSignup', obj);
    if(res.data === "success") {
        history.push("/login");
    }
    dispatch({type: ADD_USER, payload: res.data})
}

export const login = (obj, history) => async dispatch => {
    console.log("logging in user");
    const res = await axios.post('/api/userLogin', obj);
    if(!res.data.error) {
        history.push("/dashboard");
    }
    dispatch({type: FETCH_USER, payload: res.data})
}