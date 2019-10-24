import FooterCom from "../../components/Footer"
import Black from "../../components/Black"


export default class Detail extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
       
        return (<div>
            <Black />
            <div className="detail-box">
            <div>
                <div className="goodsImg"><img src={this.props.data.goodsImg} /></div>
                <h3>{this.props.data.goodsName}</h3>
                <div className="newPrice">
                    <p><span>￥{this.props.data.price}</span>元</p>
                    <p>*****</p>
                </div>
                <p className="oldPrice">98.00</p>
                <div className= "carriage">
                    运费: 配送至<span>青岛市</span>需要运费<span>0.00元</span>
                </div>
                <div className="info">
                    <p>库存99999</p>
                    <p>销量13</p>
                    <p>浏览数678</p>
                </div>
                <div className="goodsName">
                    <p>燃放性烟火</p>
                    <p>{this.props.data.goodsName}</p>
                </div>

            </div>
               
            </div>
            <div className="buy">
                    <a href="javascript:;">￥立即购买</a>
                    <a href="javascript:;" onClick={this.props.joinCar} className="iconfont icon-ysgouwuche1">加入购物车</a>
                    <a href="javascript:;" className="iconfont icon-dianpu"></a>
               </div>
            <FooterCom   />
        </div>)
    }
}