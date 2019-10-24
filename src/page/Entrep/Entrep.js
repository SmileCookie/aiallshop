import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import {Link} from "react-router-dom"

var Item = props => {
    return (<li>
        <Link to={props.path}>
            <p>{props.text}</p>
            <p>&gt;</p>
        </Link>
    </li>)
}

export default class Entrep extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        var domlist = this.props.list.map((nav, i) => {
            return <Item key={i} path={nav.path} text={nav.text} />
        })
        return (<div>
            <Black />
            <HeaderCom title={"创业资讯"} />            
            <div className="same entrep">
                <ul>
                    {domlist}
                </ul>
            </div>
            <FooterCom pageName="entrep"  />
        </div>)
    }
}