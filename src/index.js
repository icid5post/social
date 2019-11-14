import store from "./redux/redux-store.js";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
rerenderEntireTree();

store.subscribe(() => rerenderEntireTree());

// rerenderEntireTree(state);
