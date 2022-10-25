import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./tests";
import Item from "../../src/components/Item";

describe("Item component", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <Item />
      </Provider>
    </BrowserRouter>
  );

  it("Renders successfully", () => {
    expect(component.getByTestId("item")).toBeInTheDocument();
  });
});
