import MainReducer from "./mainred";
import {createStore,applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();
const Mystore=createStore(MainReducer,applyMiddleware(thunk,loggerMiddleware));

export default Mystore