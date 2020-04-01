import { FETCH_COMPANY} from './../actions/types'
export default function(state = false, action) {
    switch (action.type) {
        case FETCH_COMPANY:
            return action.payload || state;
        default:
             return state;
    }
}