import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './store';
import registerServiceWorker from './utils/registerServiceWorker';


const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootEl,
);
registerServiceWorker();

// Webpack Hot reloading
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
