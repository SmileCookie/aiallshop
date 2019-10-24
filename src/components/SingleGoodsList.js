import {Link} from "react-router-dom"

var Item = props => {
    

    return (<li>
        <Link to={`/detail/${props.goodsID}`} className= "goods">
            <div className="goodsImg">
                <img src={props.goodsImg} />
            </div>
            <div className="goodsInfo">
                <div className="goodsName">{props.goodsName}</div>
                <div className="price"><span>￥{props.price}</span>元</div>
                <div className="evaluate">*****</div>
            </div>
        </Link>
        <a href="javascript:;" onClick={props.joinCar} className="joinCar">
            <span className="iconfont icon-jiarugouwuche"></span>
        </a>
    </li>)

}

export default class SingleGoodsList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var domlist = this.props.list.map((goods, i) => {
            return <Item key={i} joinCar={this.props.joinCar} goodsID={goods.goodsID} goodsImg={goods.goodsImg} goodsName={goods.goodsName} price={goods.price} />
        })
        
        return (<div>
            {domlist}
        </div>)
    }
}