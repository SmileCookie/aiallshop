import {Link} from "react-router-dom"
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

export default class Menu extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){

        var menuList = this.props.list.map((menu, i) => {
            return <Item key={i} to={'/' + menu.path} text={menu.text} img={menu.img} />
        })
        return (<div className = "homemenu">
            <ul>
                {menuList}
            </ul>
        </div>)
    }
}