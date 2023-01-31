import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes/App.js";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import reducers from "./utils/redux/reducers";
import { Provider } from "react-redux";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
