import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./common";
import Header from "../../src/components/Header";

describe("Header component", () => {
  store.dispatch = jest.fn();
  it("Renders successfully", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    expect(component.getByTestId("header")).toBeInTheDocument();
    expect(component.getByTestId("logo")).toBeInTheDocument();
    expect(component.getByTestId("cart")).toBeInTheDocument();
  });

  it("the cart is getting empty after click on the cart icon", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cart = component.getByTestId("cart");
    expect(cart).toBeInTheDocument();
    fireEvent.click(cart);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
