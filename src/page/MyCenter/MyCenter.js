import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import {Link} from "react-router-dom"

var  Item = props => {
    return (<li>
        <Link to={props.to}>
            <p>{props.text}</p>
            <p>&gt;</p>
        </Link>
    </li>)
}

export default class MyCenter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list : [
                {
                    text : `订单管理`,
                    path : `/shopcar`
                },
                {
                    text : `我的购物车`,
                    path : `/shopcar`
                },
                {
                    text : `我的收藏`,
                    path : `/shopcar`
                },
                {
                    text : `账户信息`,
                    path : `/shopcar`
                },
                {
                    text : `修改密码`,
                    path : `/shopcar`
                },
                {
                    text : `我的帖子`,
                    path : `/shopcar`
                },
                {
                    text : `收藏帖子`,
                    path : `/shopcar`
                },
                {
                    text : `会员权益`,
                    path : `/shopcar`
                },
                {
                    text : `申请加盟`,
                    path : `/shopcar`
                },
            ]
        }

    }

    render(){
        var list = this.state.list.map((items, i)=>{
            return <Item key={i} to={items.path} text={items.text} />
        })
        return (<div>
            <Black />
            <HeaderCom hasback={true} title={"会员"} />
            <div className ="same mycenter-main">
                <div className ="head">
                    <div className="iconfont icon-yonghu"></div>
                    <div className="username">{this.props.username}</div>
                </div>
                <ul>
                    {list}
                </ul>
                <a href="javascript:;" className="leave" onClick={this.props.leave}>退出</a>
            </div>
            <FooterCom  />
        </div>)
    }
}