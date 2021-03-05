import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import './index.css';

import store from './store/store';

ReactDOM.render(
    <ErrorBoundary>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ErrorBoundary>
    ,
  document.getElementById('root')
);
