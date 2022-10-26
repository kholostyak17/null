import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./common";
import Description from "../../src/components/Description";

const mockData = {
  id: "v_MpEYR7Cw1AdE7sH3azi",
  brand: "Acer",
  model: "Liquid C1",
  price: "180",
  dimentions: "127.3 x 65.5 x 10 mm (5.01 x 2.58 x 0.39 in)",
  weight: "140",
};

describe("Description component", () => {
  it("Renders successfully", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Description data={mockData} />
        </Provider>
      </BrowserRouter>
    );
    expect(component.getByTestId("description")).toBeInTheDocument();
  });

  it("Mandatory data is rendering", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Description data={mockData} />
        </Provider>
      </BrowserRouter>
    );
    const description = component.getByTestId("description");

    expect(description).toHaveTextContent(mockData.brand);
    expect(description).toHaveTextContent(mockData.model);
    expect(description).toHaveTextContent(mockData.price);
    expect(description).toHaveTextContent(mockData.dimentions);
    expect(description).toHaveTextContent(mockData.weight);
  });
});
