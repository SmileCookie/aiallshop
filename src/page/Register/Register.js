import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import {BrowserRouter} from "react-router-dom"


export default class Register extends React.Component{
    constructor(props){
        super(props)

    }
    
    
    render(){
        return (<div>
            <Black />
            <HeaderCom hasback={true} title={"注册"} />
            <div className="same register-main">
                <p><span>用户名:</span><input type="text" ref="username" onChange={this.props.update} /></p>
                <p><span>邮箱:</span><input type="email" ref="email" /></p>
                <p><span>密码:</span><input type="password" ref="password" /></p>
                <p><span>确认密码:</span><input type="password" ref="repassword" /></p>
                <div className="agree"><input type="checkbox" ref= "ok" defaultChecked="checked" /> 同 意 <a href="javascript:;">注册协议</a></div>
                <a href="javascript:;" className="register" onClick={this.props.submit}>注册</a>
            </div>
            <FooterCom pageName="home"  />
        </div>)
    }
}
//不绑定this的点击事件onClick={(e) => {this.submit();}}