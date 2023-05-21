import MainReducer from "./mainred";
import {createStore} from 'redux'

const Mystore=createStore(MainReducer);

export default Mystore