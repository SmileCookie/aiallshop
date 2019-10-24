import Entrep from "./Entrep"

export default class EntrepController extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list : [
                {
                    path : "/fireworks",
                    text : "烟花资讯"
                },
                {
                    path : "/fireworks",
                    text : "烟酒资讯"
                },
                {
                    path : "/fireworks",
                    text : "优惠活动"
                },
                {
                    path : "/fireworks",
                    text : "购物指南"
                },
                {
                    path : "/fireworks",
                    text : "常见问题"
                },
                {
                    path : "/fireworks",
                    text : "售后服务"
                },
            ]
        }
    }
    
    render(){
        
        return <Entrep list={this.state.list} />
    }
}