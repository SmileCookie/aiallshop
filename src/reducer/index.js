import {combineReducers} from "redux"
import {homeReducer as home} from "./homeReducer"
import {goodsReducer as goods} from "./goodsReducer"
import {loginReducer as login} from "./loginReducer"
import {loginingUserReducer as logining} from "./loginingUserReducer"
import {moreSortReducer as moreSort} from "./moreSortReducer"
import {detailReducer as detail} from "./detailReducer"
import {shopCarReducer as shopcar} from "./shopCarReducer"


export const mainReducer = combineReducers({home, goods, login, logining, moreSort,detail,shopcar})