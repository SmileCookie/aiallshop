import Drink from "./Drink"
import store from "../../store"
import getDrinkGoods from "../../getData/getDrinkGoods"
import {getGoodsList} from "../../actionFactory"


export default class DrinkController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...store.getState().goods
        }
        this.updateView = this.updateView.bind(this);
        this.joinCar = this.joinCar.bind(this);
    }
    //更新视图
    updateView(){
        this.setState({
            ...store.getState().goods
        })
    }
    //组件加载完之后，将更新视图的方法注入到store中
    componentDidMount(){
        this.delListener = store.subscribe(this.updateView);
        //从服务器获取烟火产品的数据
        getDrinkGoods(goodsList=>{
            //拿到数据以后，将数据封装到action（由action创建函数生成）当中，然后通过dispatch发送出去
            store.dispatch(getGoodsList(goodsList, "drink"));
        })

        
    }
    //在组件卸载前，将更新视图的方法从store中解绑
    componentWillUnmount(){
        this.delListener();
    }

    joinCar(){
        console.log(localStorage.length);
        for(var i = 1; i < localStorage.length; i++){
            console.log('localStorage里存储的第'+i+'条数据的名字为：'+localStorage.key(i)+',值为：'+localStorage.getItem(localStorage.key(i)));
            console.log(typeof JSON.parse(localStorage.getItem(localStorage.key(i))) );
        }
    }
    render(){
        
        return <Drink dataObj={this.state} joinCar={this.joinCar} />
    }
}