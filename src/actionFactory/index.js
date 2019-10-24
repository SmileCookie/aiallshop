import { GET_GOODS_LIST_HOME, GET_BANNER_LIST_HOME, GET_GOODS_DETAIL, GET_MENU_LIST_HOME, GET_LOGIN_INFO, GET_LOGINING_USER, GET_MORE_SORT,GET_GOODS_LIST_DRINK, GET_GOODS_SHOPCAR } from "../base";


export function getGoodsList(goodsList, pageName){
    var type = "";
    switch(pageName){
        case "home":
            type = GET_GOODS_LIST_HOME;
            break;
        case "drink":
            type = GET_GOODS_LIST_DRINK;
            break;
        case "detail":
            type = GET_GOODS_DETAIL;
            break;
        case "shopcar":
            type = GET_GOODS_SHOPCAR;
            break;
        case undefined:
            type = GET_GOODS_LIST_HOME;
            break;
        default:
            type = "zzz"
            break;
    }

    return {
        type,
        goodsList,
    }
}

export function getBannerList(bannerList){
    return {
        type :GET_BANNER_LIST_HOME,
        bannerList
    }
}

export function getMenuList(menuList){
    return {
        type : GET_MENU_LIST_HOME,
        menuList
    }
}

export function getLogin(loginInfo){
    return {
        type : GET_LOGIN_INFO,
        loginInfo
    }
}

//获取处于登录状态的用户信息
export function getLoginningUser(user){
    return {
        type : GET_LOGINING_USER,
        user,
    }
}

//获取个人中心的数据菜单
export function getMoreSort(moreSortList){
    return {
        type : GET_MORE_SORT,
        moreSortList,
    }
}
