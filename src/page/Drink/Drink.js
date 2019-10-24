import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import SearchGoods from "../../components/SearchGoods"
import SingleGoodsList from "../../components/SingleGoodsList"
import Black from "../../components/Black"



export default class Drink extends React.Component{
    constructor(props){
        super(props)
       
    }
    
    render(){
        return (<div>
            <Black />
            <HeaderCom hasback={true} title={"酒水"}  />
            <SearchGoods />
            <div className="goods-main">
                <ul>
                    <SingleGoodsList joinCar={this.props.joinCar}  list={this.props.dataObj.goodsList} />
                </ul>
                
            </div>
            <FooterCom pageName="Drink"  />
        </div>)
    }
}