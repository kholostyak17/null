import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./common";
import Actions from "../../src/components/Actions";

describe("Actions component", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <Actions />
      </Provider>
    </BrowserRouter>
  );

  it("Renders successfully", () => {
    expect(component.getByTestId("actions")).toBeInTheDocument();
  });
});
