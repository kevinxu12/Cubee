
// for testing purpose lets set this to true
// going ot have to change this for req.session.user from cookesession
import { FETCH_USER, ADD_USER} from './../actions/types'
export default function(state = false, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || state;
        case ADD_USER:
            if(action.payload.error) {
                return action.payload;
            }
        default:
             return state;
    }
}