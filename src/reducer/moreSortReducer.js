import { GET_MORE_SORT } from "../base"

export function moreSortReducer(state = {moreSortList:[]}, action){
    var {type} = action;
    switch(type){
        case GET_MORE_SORT:
            var newState = {
                ...state
            }
            newState.moreSortList = action.moreSortList;
            return newState;
            break;
        default :
            return state;
            break;
    }
}