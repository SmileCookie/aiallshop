import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import {Link} from "react-router-dom"

var Item = props => {
    return (<li>
        <Link to={props.to}>
            <div className ="font"> <span  className={props.icon + " iconfont"}></span></div>
            <p>{props.text}</p>
        </Link>
    </li>)
}

export default class More extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){

        var domlist = this.props.list.map((items, i) => {
            return <Item key={i} icon={items.icon} text={items.text} to={"/" + items.path} />
        })
        return (<div>
            <Black />
            <HeaderCom title={"更多"} />  
            <div className="same more-main">
                <ul>
                    {domlist}
                </ul>
            </div>
            <FooterCom pageName="more"  />
        </div>)
    }
}