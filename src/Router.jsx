import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import App from "./pages/App/App";
import Header from "./components/Header";

export const browserRouterRef = React.createRef();

function Router() {
  return (
    <div className="div-app">
      <BrowserRouter ref={browserRouterRef}>
        <Header />
        <Switch>
          <Route exact path="/app">
            <App />
          </Route>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/:id">
            <ProductDetails />
          </Route>
          <Route>
            <h1>Código 404: Ruta no encontrada :(</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
