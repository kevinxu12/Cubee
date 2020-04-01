import axios from 'axios';
import { FETCH_REQUESTS, DELETE_REQUEST } from '../types';
// gets top five product requests
export const getTopFiveProductRequests = () => async dispatch => {
    console.log("getting top five product requests");
    const res = await axios.get('/api/getTopFiveProductRequests');
    dispatch({type: FETCH_REQUESTS,  payload: res.data});
}

export const rejectRequest = (id) => async dispatch => {
    console.log("rejecting request for " + id);
    const res = await axios.post('/api/rejectProductRequest', { id: id});
    if(res) {
        dispatch({type: DELETE_REQUEST, payload: id});
    }
}

export const acceptRequest = (obj) => async dispatch => {
    console.log("accepting request for " + obj.id);
    var ob = {
        id: obj.id,
        name: obj.name, 
        discountName: obj.discountName,
        attributes: obj.attributes
    }
    const res = await axios.post('/api/acceptProductRequest', ob);
    if(res) {
        dispatch({type: DELETE_REQUEST, payload: obj.id});
    }
    // need to write both the redux action and the backend route. 
    // should probably refactor the backend route 
}