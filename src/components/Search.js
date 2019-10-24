export default class Search extends React.Component{
    constructor(props){
        super(props)
    }
    

    render (){
        var search = this.props.search ? <p>搜索</p> : null;
        var searchClass = this.props.searchClass ? "goodsSearch" : null;
        return (
            <div className = "search-box " id={searchClass}>
                <div className="iconfont icon-sousuo search"></div>
                <input type="text" placeholder="搜索你喜欢的内容" />
                {search}
                
            </div>
            
        )
    }
}