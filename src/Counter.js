import React, { Component } from 'react';
import store from './store/index';
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter 
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:1};
        store.dispatch(action);
    }
    handleDec=()=>{
        let action={type:'DEC'};
        store.dispatch(action); 
    }
    handleOdd=()=>{
     if (store.getState().counter % 2 !== 0) { 
        let action={type:'ADD',value:1};
        store.dispatch(action);
     }
    }
    handleAsync=()=>{
        setTimeout(function () {  
            store.dispatch({type:'ADD',value:1})
          }, 1000)
    }
    render() {
        return (
            <div>
                Clicked: <span>{this.state.num}</span> times
                <br/>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleDec}>-</button>
                <br/>
                <button onClick={this.handleOdd}>Increment if odd</button>
                <button onClick={this.handleAsync}>Increment async</button>
            </div>
        );
    }
}

export default Counter;
