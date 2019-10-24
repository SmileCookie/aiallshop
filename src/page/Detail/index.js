import Detail from "./Detail"
import store from "../../store"
import getGoodsDetail  from "../../getData/getGoodsDetail"
import {getGoodsList as goodsListAction} from "../../actionFactory"


export default class DetailController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState().detail,        
        }
        this.updateView = this.updateView.bind(this);
        this.joinCar = this.joinCar.bind(this);
    }
    
    componentDidMount(){
        var id = this.props.match.params.goodsID
        //console.log(this.props);
        this.delListener = store.subscribe(this.updateView);
        //请求商品的商品详情
        getGoodsDetail(goodsList => { 
            console.log(goodsList)          
            store.dispatch(goodsListAction(goodsList, "detail"));
        }, id);

        
           
    }
    componentWillUnmount(){
        this.delListener();
    }
    updateView(){
        this.setState({
            ...store.getState().detail,
            
        })
    }

    joinCar(){
        var goodsID = this.props.match.params.goodsID;
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
            //console.log(loginningUser);
            //首先要遍历一下用户购物车,看是否有将要添加的商品
            //console.log(loginningUser.userShopCar.length);
            if(loginningUser.userShopCar.length == 0){
                //数组为空
                //将obj存放到用户的数组中
                
                var obj = {
                    goodsID:goodsID,
                    goodsName : this.state.goodsList.goodsName,
                    goodsImg: this.state.goodsList.goodsImg,
                    price : this.state.goodsList.price,
                    num: 1,
                }
                //将该商品添加到数组中
                loginningUser.userShopCar.push(obj);
                //保存到本地
                localStorage.setItem(loginningUser.username, JSON.stringify(loginningUser));
            }else{
                //数组里有商品,遍历一下数组
                for(var i in loginningUser.userShopCar){
                    if(loginningUser.userShopCar[i].goodsID == goodsID){
                        //数组里有该商品
                        loginningUser.userShopCar[i].num++;
                        continue;

                    }
                        //没有该商品
                        var obj = {
                            goodsID:goodsID,
                            goodsName : this.state.goodsList.goodsName,
                            goodsImg: this.state.goodsList.goodsImg,
                            price : this.state.goodsList.price,
                            num: 1,
                        }
                        loginningUser.userShopCar.push(obj);
                        
                    
                }
                //保存到该用户写的购物车里
                localStorage.setItem(loginningUser.username, JSON.stringify(loginningUser));
            }
        }
        console.log(loginningUser);
    }
    render(){
        
        return <Detail joinCar={this.joinCar} data={this.state.goodsList}  />
    }
}