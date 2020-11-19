import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './App';

import store from './redux/store.js';

import './styles/index.scss';
import "typeface-roboto";
import 'font-awesome/css/font-awesome.min.css';
import 'emoji-mart/css/emoji-mart.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
