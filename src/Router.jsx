import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Gallery from "./pages/Gallery/Gallery";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import App from "./pages/App/App";

export const browserRouterRef = React.createRef();

function Router() {
  return (
    <div className="div-app">
      <BrowserRouter ref={browserRouterRef}>
        {/* <MyNavbar /> */}
        <Switch>
          <Route exact path="/app">
            <App />
          </Route>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route exact path="/:id">
            <ItemDetails />
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