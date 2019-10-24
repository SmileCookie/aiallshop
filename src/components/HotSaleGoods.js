import {Link} from "react-router-dom"
var Item = props => {
    return (<li>
        <Link to={`/detail/${props.goodsID}`}>
            <div className="goodsImg">
                <img src={props.goodsImg}/>
            </div>
            <div className="goodsName goodsInfo">{props.goodsName}</div>
            <div className="price goodsInfo">￥{props.price}</div>
        </Link>
    </li>)
}

export default class HotSaleGoods extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {

        var goodslist = this.props.list.map((goods, i) => {
            return <Item key={i} goodsID={goods.goodsID} goodsImg={goods.goodsImg} price={goods.price} goodsName={goods.goodsName}  />
        })
        return (<div className="hotgoods">
            <div className="head">
                <p></p>
                <div className="title">热销产品</div>
            </div>
            <ul className="goods">
                {goodslist}
            </ul>
        </div>)
    }
}