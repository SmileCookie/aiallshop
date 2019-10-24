import Register from "./Register"

export default class RegisterController extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        
    }

    submit(){
        var data = {
            username : this.refs.childRef.refs.username.value,
            email : this.refs.childRef.refs.email.value,
            password : this.refs.childRef.refs.password.value,
            repassword : this.refs.childRef.refs.repassword.value,
            userShopCar : [],
            isLogin : false,
        }

        //清空本地存储
        //localStorage.clear();
        //console.log(this.refs.ok.value)
        if(!data.username){//判断用户名是否为空
        //用户名为空
        console.log("用户名不能为空,请输入用户名");

        }else if(JSON.parse(localStorage.getItem(data.username))){//用户名不为空, 判断localStorage中是否存在将要注册的用户名
            //存在的话，就是直接打印用户名已经存在
            console.log("用户名已经存在,请更换其他用户名");
            
        }else if(!data.email){//邮箱不存在
            console.log("邮箱不能为空");
        }else if(data.password != data.repassword){//判断两次输入的密码是否一致
            //两次密码不一致
            console.log("两次密码不一致,请重新输入");
        }else if(!data.password && !data.repassword){
            //密码为空
            console.log("密码不能为空,请输入密码");
        }else{//两次密码输入一致且不为空
            // 则以用户名data.username为id保存在localStorage中,存的内容要转成字符串,localStorage存储是以键值对的形式存储的,值为字符串
            localStorage.setItem(data.username, JSON.stringify(data));
            console.log("注册成功");
            //注册成功后自动跳转到登录页面
            this.props.history.push(`/login`); 
        }
        

        //不存在,
        //
        //localStorage.setItem(data.username, JSON.stringify(data));
        
       
        
      
    }
    
    render(){
        
        return <Register ref={"childRef"} submit={this.submit}/>
    }
}