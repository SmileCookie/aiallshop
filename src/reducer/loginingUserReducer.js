import { GET_LOGINING_USER } from "../base"

export function loginingUserReducer(state = {user:{}}, action){
    var {type} = action;
    switch(type){
        case GET_LOGINING_USER:
            var newState = {
                ...state
            }
            newState.user = action.user;
            return newState;
            break;
        default :
            return state;
            break;
    }
}