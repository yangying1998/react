import React, { Component } from 'react';
import store from './store/index'; 
class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:store.getState().list  
        }
        store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }
    handleAdd=(e)=>{
     if(e.keyCode===13){
        store.dispatch({
            type:'add_item',
            value:e.target.value
        })
        e.target.value='';
     }
    }
    handleDel=(e)=>{  
        console.log(e.target.value);
        store.dispatch({
            type:'del_item',
            delValue:e.target.value
        })
    }
    render() {
        let {list}=this.props;
        return (
            <div>
                <input type="text" onKeyDown={this.handleAdd}/><br/>
                <ul>
                    {
                       list.map((item,index)=>(
                            <li key={index}>{item} <button value={index} style={{fontSize:"10px",borderRadius:"2px"}} onClick={this.handleDel}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
export default connect(mapStateToProps)(TodoList);
// export default TodoList;
