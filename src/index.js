import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import { App } from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.unregister();