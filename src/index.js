import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./components/App";
import "./style/index.css";
import store from "./components/state/index";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
