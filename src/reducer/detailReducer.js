import {GET_GOODS_DETAIL} from  "../base"

export function detailReducer(state={goodsList:{}}, action){
    console.log(state,action)
    var {type} = action;
    
    switch(type){
        case GET_GOODS_DETAIL:
        var newState = {
            ...state
        }
        newState.goodsList = action.goodsList;
        console.log(state,newState)
        return newState;
            break;
        default:
            return state;
            break;
    }
}