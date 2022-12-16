import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Routers } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store/store";
import "./style/styles.scss";

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
