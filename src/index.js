import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Routers } from "react-router-dom";
import { Provider } from "react-redux";
import "./style/styles.scss";
import { store } from "store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers>
        <App />
      </Routers>
    </Provider>
  </React.StrictMode>
);
