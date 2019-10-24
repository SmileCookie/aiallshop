import FooterCom from "../../components/Footer"
import {Route} from "react-router-dom"


export default class Fireworks extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return (<div>
            <div>
                酒水
                
            </div>
            <FooterCom pageName="Fireworks"  />
        </div>)
    }
}