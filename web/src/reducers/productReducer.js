import { GET_NEW_PRODUCTS} from './../actions/types'

export default function(state = {name: 'Karthik'}, action) {
    switch (action.type) {
        case GET_NEW_PRODUCTS:
            return action.payload;
        default:
             return state;
    }
}