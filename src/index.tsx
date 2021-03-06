import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import App from "./app";
import createStore from "./redux/store";

import "./styles.scss";

const store = createStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
