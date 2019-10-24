import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"


export default class Shop extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (<div>
            <Black />
            <HeaderCom title={"商铺"} />  
            <div className="same">
                商铺
            </div>
            <FooterCom pageName="shop"  />
        </div>)
    }
}