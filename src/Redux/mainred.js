import {combineReducers} from 'redux'
import Booklist from './breduce';
import Userlist from './ureduce';

const MainReducer=combineReducers(
    {Booklist,Userlist}
);

export default MainReducer;
