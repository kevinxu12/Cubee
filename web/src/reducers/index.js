import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import requestReducer from './requestReducer';
import companyAuthReducer from './companyAuthReducer';
export default combineReducers({
    auth: authReducer,
    products: productReducer,
    requests: requestReducer,
    companyAuth: companyAuthReducer
})