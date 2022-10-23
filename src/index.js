import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
