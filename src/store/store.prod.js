import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [ReduxThunk];
const enhancer = [applyMiddleware(...middleware)];

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, ...enhancer);
}
