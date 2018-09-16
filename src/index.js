import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './utils/registerServiceWorker';
import './globalStyles/index.css';
import App from './App';
import configureStore from './store';
/*eslint-disable */
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
