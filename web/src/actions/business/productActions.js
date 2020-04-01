import axios from 'axios';
import {GET_NEW_PRODUCTS} from '../types';
export const addProduct = (obj, history) => async dispatch => {
    console.log("adding new product");
    // passing product info as a parameter
    history.push({
        pathname: '/link_account',
        state: {productInfo: obj }
    });
    // taken out for debugging p
   
}


export const getTopFiveNewProducts = () => async dispatch => {
    console.log("getting top five new products");
    const res = await axios.get('/api/getTopFiveNewProducts');
    dispatch({ type: GET_NEW_PRODUCTS, payload: res.data})
}
