import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Sort from "@/pages/Sort"
import Discover from "@/pages/Discover"
import ShopCar from "@/pages/ShopCar"
import MyCenter from "@/pages/MyCenter"
import Detail from "@/pages/Detail"
import Drink from "@/pages/Drink"
import Phone from "@/pages/Phone"
import GoodsList from "@/pages/GoodsList"
import PutGoods from "@/pages/PutGoods"
import PriceGoods from "@/pages/PriceGoods"
import Login from "@/pages/Login"
import Register from "@/pages/Register"


Vue.use(Router)

export default new Router({
    routes: [
        {path : "/", redirect : {name : "Home"}},
        {path: '/home',name: 'Home',component: Home},
        {path : "/sort", name : "Sort", component : Sort,children : [            
            {path : "drink", component : Drink,name:'drink'},
            {path : "phone", component : Phone,name:'phone'}
        ]},
        {path : "/discover", name : "Discover", component : Discover},
        {path : "/shopCar", name : "ShopCar", component : ShopCar},
        {path : "/myCenter", name : "MyCenter", component : MyCenter},
        {path : "/detail", name : "Detail", component: Detail},
        {path : "/goodsList", name : "GoodsList", component : GoodsList,children : [
            {path : "putGoods", component : PutGoods,name:'PutGoods'},
            {path : "priceGoods", component : PriceGoods,name:'PriceGoods'}
        ]},
        {path : "/login", name : "Login", component : Login},
        {path : "/register", name : "Register", component : Register}
    ]
})
