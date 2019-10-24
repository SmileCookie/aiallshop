import {GET_GOODS_LIST_DRINK} from  "../base"

export function goodsReducer(state={title:"商品列表", goodsList:[]}, action){

    var {type} = action;
    switch(type){
        case GET_GOODS_LIST_DRINK:
            var newState = {
                ...state
            }
            newState.goodsList = action.goodsList;
            return newState
            break;
        default:
            return state;
            break;
    }
}