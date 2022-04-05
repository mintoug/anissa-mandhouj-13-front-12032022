import App from '../src/router/App';
import './css/main.css';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import store from './utils/reducers/store';

ReactDOM.render(
  <Provider store={store}>
      <Fragment>
          <App />
      </Fragment>
  </Provider>,
   document.getElementById('root')
   );