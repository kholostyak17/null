import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";

export const browserRouterRef = React.createRef();

function Router() {
  return (
    <div className="div-app">
      <BrowserRouter ref={browserRouterRef}>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/:id">
            <ProductDetails />
          </Route>
          <Route>
            <h1>404- route not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
