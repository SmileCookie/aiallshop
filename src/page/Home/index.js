import Home from "./Home"
import store from "../../store"
import getBanner from "../../getData/getBanner"
import getHomeGoods from "../../getData/getHomeGoods"
import getMenu  from "../../getData/getMenu" 
import {getGoodsList as goodsListAction, getBannerList as bannerListAction, getMenuList as menuListAction} from "../../actionFactory"

export default class HomeController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState().home
            
        }
        
        this.updateView = this.updateView.bind(this)
    }

    componentDidMount(){
        console.log(this.props.home)
        //页面加载完之后开始更新师徒
        this.delListener = store.subscribe(this.updateView);
        //开始加载轮播图的数据

        getBanner(bannerList =>{

            store.dispatch(bannerListAction(bannerList));
        })

        //开始加载home页热销产品的数据
        getHomeGoods(goodsList => {
            
            store.dispatch(goodsListAction(goodsList,"home"));
        })
        //开始加载home页的菜单栏的列表数据
        getMenu(function(menuList){
            store.dispatch(menuListAction(menuList));
        })
        //console.log(this.state);
    }

    componentWillUnmount(){
        //页面卸载之后解绑this.updateView
        this.delListener()
    }
    updateView(){
        this.setState({
            ...store.getState().home
        })
    }
    
    render(){
        
        return <Home dataObj={this.state} />
    }
}