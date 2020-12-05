import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import { userActions } from "redux/actions";
import store from "./redux/store.js";

import "./styles/index.scss";
import "typeface-roboto";
import "font-awesome/css/font-awesome.min.css";
import "emoji-mart/css/emoji-mart.css";

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
