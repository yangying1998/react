import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {Provider} from 'react-redux';
import store from './store';
//import Counter from './Counter';
import TodoList from './TodoList'
ReactDOM.render(
    <div style={{padding:30}}>
       {/* <Counter/>  */}
       <Provider>
            <TodoList/>
       </Provider>
       
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// Learn more about service workers: http://bit.ly/CRA-PWA

 