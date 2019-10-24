import Vue from "vue"
import Vuex from "vuex"

import home from "./home"
import goodsList from "./goodsList"
import putGoods from "./putGoods"
import detail from "./detail"

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        home,
        goodsList,
        // shopCar,
        detail,
        putGoods
    }
})