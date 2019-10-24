import { GET_GOODS_LIST_HOME, GET_BANNER_LIST_HOME, GET_MENU_LIST_HOME } from "../base";



export function homeReducer(state={title:"首页",goodsList:[],bannerList:[],menuList:[]}, action){
    var {type} = action;
    switch(type){
        case GET_GOODS_LIST_HOME:
            //console.log(action.goodsList);
            var newState = {...state};
            newState.goodsList = action.goodsList;
            return newState;
            break;
        case GET_BANNER_LIST_HOME:
            //console.log(action.bannerList);
            var newState = {...state};
            newState.bannerList = action.bannerList;
            return newState;
            break;
        case GET_MENU_LIST_HOME:
            var newState = {...state};
            newState.menuList = action.menuList;
            return newState;
            break;
        default:
            return state;
    }
    //console.log(state.bannerList);
}