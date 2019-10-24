import { GET_LOGIN_INFO } from "../base"

export function loginReducer(state = {loginInfo:{}}, action){
    var {type} = action;
    switch(type){
        case GET_LOGIN_INFO:
            var newState = {
                ...state
            }
            newState.loginInfo = action.loginInfo;
            return newState;
            break;
        default :
            return state;
            break;
    }
}

