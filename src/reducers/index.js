import { combineReducers } from 'redux';
import blogsReducer from 'containers/Blog/reducer';

const rootReducer = combineReducers({ blogsReducer });

export default rootReducer;
