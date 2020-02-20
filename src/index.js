import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./state/reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById("app")
);
