import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import Fireworks from "../Fireworks"
import Drink from "../Drink"
import {Route,Link,Switch} from "react-router-dom"


var Item = props => {
    return (
        <li>
            <Link to={props.to}>
                <div className="menuImg">
                    <img src={props.img} />
                </div>
                <p>{props.text}</p>
            </Link>
        </li>
    )
    
}

export default class Sort extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){

        var menuList = this.props.list.map((menu, i) => {
            return <Item key={i} to={'/' + menu.path} text={menu.text} img={menu.img} />
        })

        return (<div>  
            <Black />
            <HeaderCom title={"产品"} />          
            <div className="same sort-main">
                <ul>
                    {menuList}
                </ul>
            </div>
            
            <FooterCom exact pageName="sort"  />
        </div>)
    }
}