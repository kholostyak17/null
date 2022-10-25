import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./tests";
import Image from "../src/components/Image";

describe("Image component", () => {
  const component = render(
    <BrowserRouter>
      <Provider store={store}>
        <Image />
      </Provider>
    </BrowserRouter>
  );

  it("Renders successfully", () => {
    expect(component.getByTestId("image")).toBeInTheDocument();
  });
});
