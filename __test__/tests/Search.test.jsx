import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./tests";
import "babel-polyfill";
import Description from "../../src/components/Description";

describe("Description component", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <Description />
      </Provider>
    </BrowserRouter>
  );

  it("Renders successfully", () => {
    expect(component.getByTestId("description")).toBeInTheDocument();
  });
});
