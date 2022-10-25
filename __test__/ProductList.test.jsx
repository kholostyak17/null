import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./tests";
import ProductList from "../src/pages/ProductList";

describe("ProductList component", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductList />
      </Provider>
    </BrowserRouter>
  );

  it("Renders successfully", () => {
    expect(component.getByTestId("list-page")).toBeInTheDocument();
  });
});
