import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import {Link} from "react-router-dom"
import { History } from 'react-router';


export default class Login extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    
    render(){
        return (<div>
            <Black />
            <HeaderCom hasback={true} title={"登录"} />
            <div className="same login-main">
                <div className="login-box">
                    <input type="text" placeholder="请输入用户名/邮箱" ref ="username" /><br />
                    <input type="password" placeholder="请输入密码" ref="password" />
                    <a href="javascript:;" onClick={this.props.login}>登录</a>
                </div>
                <div className="forget">
                    <p></p>
                    <div className="forgetPassword">忘记密码?</div>
                </div>
                <div className="toRegister">
                    还没有会员账...<Link to="/register">马上注册</Link>
                </div>
            </div>
            <FooterCom  />
        </div>)
    }
}