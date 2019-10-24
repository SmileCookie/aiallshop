import Login from "./Login"
import {getLogin as loginAction} from "../../actionFactory"
import store from "../../store"
 

export default class LoginController extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...store.getState().login
        }
        this.login = this.login.bind(this);
        this.updateView = this.updateView.bind(this);
    }
    updateView(){
        this.setState({
            ...store.getState().login
        })
    }
    componentDidMount(){
        this.delListener = store.subscribe(this.updateView);

          
    }
    componentWillUnmount(){
        this.delListener();
    
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    
    login(){
        //localStorage.clear();
        var newdata = {
            username : this.refs.childRef.refs.username.value,
            password : this.refs.childRef.refs.password.value,
        }
        //判断输入的用户名是否在本地存在,即localStorage中,并且转换成对象
        var local = JSON.parse(localStorage.getItem(newdata.username));
        if(!local){//本地不存在
            
            console.log("用户名错误");
        }else if(newdata.password != local.password){ //用户名存在,但密码输入错误了
            console.log("密码不正确,请重新输入");
        }else{
            //登录成功
            local.isLogin = true;
            localStorage.setItem(local.username, JSON.stringify(local));
            console.log("登录成功");
            this.props.history.push(`/mycenter/${newdata.username}`);
            store.dispatch(loginAction(newdata));
            
            //console.log(local);
        }
    }
    
    

    render(){
        
        return <Login ref={"childRef"} login={this.login} />
    }
}