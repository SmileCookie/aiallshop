import Swiper from "swiper"
import {Link} from "react-router-dom"


var Slide = props =>{
    
    return (<div className="swiper-slide">
        <Link to={`/detail/${props.goodsID}`}>
            <img src={props.goodsImg} />
        </Link>
    </div>) 
}

export default class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var option ={};
        option.loop = true;
        if(this.props.auto){
            option.autoplay = true;
        }
        if(this.props.hasPage){
            option.pagination = {el : ".swiper-pagination"};
        }
        this.swiper = new Swiper(".swiper-container", option);
    }
    componentDidUpdate(){
        this.swiper.update()
    }

    render(){

        var slideList = this.props.list.map((goods, i) => {
            return <Slide key={i} goodsID={goods.goodsID} goodsImg={goods.goodsImg} />
        })
        var pag = this.props.hasPage ? <div className = "swiper-pagination"></div> : null;
        return (<div className="swiper-container banner">
            <div className="swiper-wrapper">
                {slideList}
            </div>
            {pag}
        </div>)
    }
}