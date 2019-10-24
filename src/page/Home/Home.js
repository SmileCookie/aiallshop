import FooterCom from "../../components/Footer"
import HeaderCom from "../../components/Header"
import Banner from "../../components/Banner"
import Menu from "../../components/Menu"
import HotSaleGoods from "../../components/HotSaleGoods"


export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hassaoma : true,
            hasback : false,
            title : false ,
            searchBox : true,
            homeClass : true,
            hasPage : true,
            
        }
    }
    
   
    
    render(){
        return (<div>
            <HeaderCom homeClass={this.state.homeClass} searchBox={this.state.searchBox} title={this.state.title} hassaoma={this.state.hassaoma} hasback={this.state.hasback} />
            <div className="homemain">
                <Banner list={this.props.dataObj.bannerList} hasPage={true} auto={true}/>
                <Menu list={this.props.dataObj.menuList} />
                <HotSaleGoods list={this.props.dataObj.goodsList} />
            </div>
            <FooterCom pageName="home"  />
        </div>)
    }
}