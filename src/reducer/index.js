import {combineReducers} from 'redux';
import tasks from './task';
import maptask from './ApiList';
const myReducer = combineReducers({
     tasks,
     maptask
});
export default myReducer;