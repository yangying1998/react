import {createStore} from 'redux';
import reducer from './reducer'
let store=createStore(reducer);  
//window._REDUX_DEVTOOLS_EXTENSION_()
export default store;