export default class SearchGoods extends React.Component{
    constructor(props){
        super(props)
    }
    

    render (){
        
        
        return (
            <div className = "search-goods">
                <div className="iconfont icon-sousuo search"></div>
                <input type="text" placeholder="搜索你喜欢的内容" />
                <a href="javascript:;">搜索</a>
                
            </div>
            
        )
    }
}