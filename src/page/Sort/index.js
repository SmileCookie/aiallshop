import Sort from "./Sort"
import store from "../../store"
import getMenu from "../../getData/getMenu"
import {getMenuList as menuListAction} from "../../actionFactory"



export default class SortController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState().home
        }
        this.updateView = this.updateView.bind(this);
    }
    //视图更新
    updateView(){
        this.setState({
            ...store.getState().home
        })
    }
    componentDidMount(){
        //组件加载完毕后执行视图更新函数绑定到store中
        this.delListener = store.subscribe(this.updateView);
        //开始从服务器中加载数据
        getMenu(function(menuList){

            //拿到数据以后，将数据封装到action中（有action创建函数生成），然后通过dispatch发送到reducer
            store.dispatch(menuListAction(menuList));
        })
    }
    componentWillUnmount(){
        //组件卸载之前,将视图更新的函数从store中解绑
        this.delListener();
    }

    render(){
        
        return (
        <Sort list={this.state.menuList}  />
            )
    }
}