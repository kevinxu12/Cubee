// reducer that keeps track of state for requests
import { FETCH_REQUESTS, DELETE_REQUEST, PRODUCT_REQUEST_ERROR } from './../actions/types'
export default function (state = [], action) {
    switch (action.type) {
        case DELETE_REQUEST:
            return state.filter(x => {
                return x._id != action.payload
            });
        case FETCH_REQUESTS:
            return action.payload || state;
        default:
            return state;
    }
}