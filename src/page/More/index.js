import More from "./More"
import store from "../../store"
import getMoreSort from "../../getData/getMoreSort"
import {getMoreSort as moreSortAction} from "../../actionFactory"

export default class MoreController extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ...store.getState().moreSort
        }
        this.updateView = this.updateView.bind(this);
    }
    updateView(){
        this.setState({
            ...store.getState().moreSort
        })
    }
    
    componentDidMount(){
        this.delListener = store.subscribe(this.updateView);
        getMoreSort(moreSortList =>{
            store.dispatch(moreSortAction(moreSortList));
        })
    }
    componentWillUnmount(){
        this.delListener();
    }
    render(){
        
        return <More  list={this.state.moreSortList} />
    }
}