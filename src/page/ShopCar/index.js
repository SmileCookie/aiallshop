import ShopCar from "./ShopCar"
import store from "../../store"
import {getGoodsList as goodsListAction} from "../../actionFactory"

export default class ShopCarController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState().shopcar
        }
        this.updateView = this.updateView.bind(this);
    }
    updateView(){
        this.setState({
            ...store.getState().shopcar
        })
    }
    componentDidMount(){
        this.delListener = store.subscribe(this.updateView);
        var list = [];//用来存储用户的isLogin的属性
        for(var i = 1; i < localStorage.length; i++){
            //console.log('第'+ (i) +'条数据的键值为：' + localStorage.key(i) +'，数据为：' + localStorage.getItem(localStorage.key(i)));
            var user = JSON.parse(localStorage.getItem(localStorage.key(i)));
            //console.log(user);
            list.push(user.isLogin);
            //console.log(list);
            
        }
        var userIndex = list.indexOf(true);//找到数组中true的下标
        if(userIndex < 0){
            //true不存在
            console.log("没有用户登录");
        }else{
            //true存在,有用户在登录状态,获取正在登陆的用户
            var loginningUser = JSON.parse(localStorage.getItem(localStorage.key(userIndex + 1)));
            var goodsList = loginningUser.userShopCar;
            //console.log(goodsList);
            //将该用户的购物车数组发送出去
            if(goodsList){
                store.dispatch(goodsListAction(goodsList, "shopcar"));
            }
            
        }
    }
    componentWillUnmount(){
        this.delListener();
    }
    render(){
        
        return <ShopCar list={this.state.goodsList} />
    }
}