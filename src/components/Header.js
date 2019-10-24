import Search from "./Search"
import history from 'history/createBrowserHistory' 

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search : false,    
        }
        this.back = this.back.bind(this)

    }
    back(){
        var {history} = this.props
        history.goBack();
    }
    render(){
        var back = this.props.hasback ? <a href="javascript:history.go(-1);" className = "back iconfont icon-jiantou" ></a> : null;
        var saoma = this.props.hassaoma ? <div className="iconfont icon-saoma"></div> : null;
        var title = this.props.title ? <h3>{this.props.title}</h3> : null;
        var searchBox = this.props.searchBox ? <Search search={this.state.search} />  : null;
        var homeClass = this.props.homeClass ? "home" : null;
        return (<header className={homeClass}>
            {back}
            {saoma}
            {searchBox} 
            {title}        
        </header>)
    }
}