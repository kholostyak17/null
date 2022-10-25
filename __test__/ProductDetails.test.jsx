import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./tests";
import "whatwg-fetch";
import ProductDetails from "../src/pages/ProductDetails";

describe("ProductDetails component", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetails />
      </Provider>
    </BrowserRouter>
  );

  it("Renders successfully", () => {
    expect(component.getByTestId("details-page")).toBeInTheDocument();
  });
});
