import {NavLink} from "react-router-dom"

var Item = props => {
    var aName = props.isActive ? "active" : ""
    return (<li className = {aName}>
        <NavLink to={props.to}>
            <div className ={"iconfont " + props.icon}></div>
            <p>{props.text}</p>
        </NavLink>
    </li>)
}


export default class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list : [
                {
                    path : "home",
                    text : "首页",
                    icon : "icon-shouye"
                },
                {
                    path : "entrep",
                    text : "创业资讯",
                    icon : "icon-lianjie"
                },
                {
                    path : "sort",
                    text : "产品",
                    icon : "icon-tubiao13"
                },
                {
                    path : "shop",
                    text : "商铺",
                    icon : "icon-zhuzhuangtu"
                },
                {
                    path : "more",
                    text : "更多",
                    icon : "icon-gengduo-tianchong"
                },
            ]
        }
    }

    render(){
        var navList = this.state.list.map((nav, i) =>{
            var isActive = nav.path == this.props.pageName;
            return <Item key={i} to={"/" + nav.path} text={nav.text} isActive={isActive} icon={nav.icon} />
        })
        return (<nav>
            <ul>
                {navList}
            </ul>
        </nav>)
    }
}