import { combineReducers } from 'redux';

// TODO delete sample reducer
// eslint-disable-next-line no-unused-vars
function todoApp(state = {}, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}

const rootReducer = combineReducers({ todoApp });

export default rootReducer;
