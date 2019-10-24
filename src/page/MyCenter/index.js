import MyCenter from "./MyCenter"
import store from "../../store"

import {getLoginningUser as loginingUserAction} from "../../actionFactory"

export default class MyCenterController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState().logining
        }
        this.leave = this.leave.bind(this);
        this.updateView = this.updateView.bind(this);
    }
    componentWillMount(){
        this.delListener = store.subscribe(this.updateView);
        store.dispatch(loginingUserAction(this.props.match.params.username));
    }
    componentWillUnmount(){
        this.delListener();
    }
    updateView(){
        this.setState({
            ...store.getState().logining
        })
    }
    //用户退出登录
    leave(){
        //获取到当前登录的用户的信息
        var onlineUser = JSON.parse(localStorage.getItem(this.state.user));
        //将他的登录状态变成下线
        onlineUser.isLogin = false;
        //将state的user设为空
        store.dispatch(loginingUserAction(""));
        console.log(onlineUser.username + "已下线");
        //退出后自动跳到登录页面
        this.props.history.push(`/login`); 
        console.log(this.state);     
    }
    render(){
        
        return <MyCenter leave={this.leave} username={this.state.user} />
    }
}