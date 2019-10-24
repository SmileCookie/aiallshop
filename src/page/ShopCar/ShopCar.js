import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Black from "../../components/Black"
import {Link} from "react-router-dom"


var Item = props => {
    return (<li>
        
        <div className="goods-box">
            <Link to={`/detail${props.goodsID}`} className="tolink">
                <div className="goodsImg">
                    <img src={props.goodsImg} />
                </div>
                <div className="goodsInfo">
                    <p className="goodsName">{props.goodsName}</p>
                    <p>{props.goodsName}</p>
                </div>
            </Link>
            <div className="goodsPrice">
                <div className="price">￥{props.price}</div>
                <div className="goodsNum">
                    <a href="javascript:;">-</a>
                    <input type="text" />
                    <a href="javascript:;">+</a>
                </div>
            </div>
        </div>
            
        
        <div className="foot">
            <div className="del">
                <a href = "javascript:;" className="iconfont icon-gouwuche-shanchu"></a>
            </div>
            <div className="allGoods">
                <p className="allPrice">
                    <span>合计:</span>
                    <span>￥118.00</span>
                </p>
                <p className="allNum">
                    <span>数量:</span>
                    <span>{props.num}</span>
                </p>
            </div>
        </div>
    </li>)
}

export default class ShopCar extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){

        var list = this.props.list.map((goods, i)=>{
            return <Item key={i} goodsID={goods.goodsID} goodsImg={goods.goodsImg} goodsName={goods.goodsName} num={goods.num} price={goods.price} />
        })
        return (<div>
            <Black />
            <HeaderCom hasback={true} title={`购物车`} />
            <div className="same shopcar-main">
                <ul>
                    {list}
                </ul>
            </div>
            <div className="countMoney">
                <p>
                    总价:<span>￥118.00</span>
                </p>
                <Link to={`/order`}>去结算</Link>    
            </div>
            <FooterCom pageName="shopcar"  />
        </div>)
    }
}