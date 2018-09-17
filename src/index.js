import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './utils/registerServiceWorker';
import './globalStyles/index.css';
import App from './App';
import configureStore from './store';

/*eslint-disable */

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootEl,
);
registerServiceWorker();

// hot reloading
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
