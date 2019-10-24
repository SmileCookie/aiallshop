import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"


export default class Order extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (<div>
            <Black />
            <HeaderCom title={"订单"} />  
            <div className="same">
                订单
            </div>
            <FooterCom  />
        </div>)
    }
}