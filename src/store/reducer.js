// import {combineReducers} from 'redux';
// let initValue={
//     list:[1,2,3]
// }
// let counter=(state=0/*原来的state*/,action/*操作*/)=>{  
//        switch(action.type){
//          case 'ADD':
//             return state+action.value;
//          case 'DEC':
//             return state -1;
//          default:
//             return state;
//        }
//     }
// let todo=(state=initValue,action)=>{
//     let newState=JSON.parse(JSON.stringify(state));
//      let obj=Object.assign({},state,{a:100});
//         switch(action.type){
//             case 'add_item':
//                newState.list.push(action.value);    
//                return newState;
//             case 'del_item':
//                newState.list.splice(action.delValue,1);
//                return newState;
//             default :
//                return state;
    
//         }
//     }
// export default combineReducers({
//     counter,todo
// })


import {ADD_TODO_ITEM} from '../actions/ActionTypes';
let initValue={
   list:[1,2,3]
}
export default (state,action)=>{
   switch(action.type){
      case ADD_TODO_ITEM:
         // let newState=JSON.parse(JSON.stringify(state));
         // newState.list.push(action.value);
         // return newState;
         return [...state,action.value];
      case DEL_TODO_ITEM:
         // let newState1=JSON.parse(JSON.stringify(state));
         // newState1.list.splice(action.index,1);
         // return newState1;
         return state.filter((item,index)=>{
            return index!==action.index;
         })
      default:
         return state;
   }
}