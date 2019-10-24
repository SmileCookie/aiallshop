import {Route, Redirect, Switch, indexRoute} from "react-router-dom"

import Home from "./page/Home"
import Entrep from "./page/Entrep"
import Sort from "./page/Sort"
import Shop from "./page/Shop"
import More from "./page/More"
import Fireworks from "./page/Fireworks"
import ShopCar from "./page/ShopCar"
import Detail from "./page/Detail"
import Login from "./page/Login"
import Register from "./page/Register"
import Drink from "./page/Drink";
import MyCenter from "./page/MyCenter";
import Order from "./page/Order"


export default class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<div>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/entrep" component={Entrep}/>
                <Route path="/sort" component={Sort} />
                    
                <Route path="/drink" component={Drink} />
                <Route path="/firewords" component={Fireworks} />
                
                <Route path="/shop" component={Shop}/>
                <Route path="/more" component={More}/>
                <Route path="/detail/:goodsID" component={Detail}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/mycenter/:username" component={MyCenter}/>
                <Route path="/shopcar" component={ShopCar}/>
                <Route path="/order" component={Order}/>
                <Route path="/" component={Home} />
            </Switch>
        </div>)
    }
}