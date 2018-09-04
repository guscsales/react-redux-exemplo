import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heroes from './components/heroes/heroes';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Heroes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
