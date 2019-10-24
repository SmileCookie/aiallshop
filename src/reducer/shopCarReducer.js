import {GET_GOODS_SHOPCAR} from "../base"

export function shopCarReducer(state={goodsList : []}, action){
    var {type} = action;
    switch(type){
        case GET_GOODS_SHOPCAR:
            var newState = {...state};
            newState.goodsList = action.goodsList;
            //console.log(newState);
            return newState;
            break;
        default:
            return state;
            break;
    }
}