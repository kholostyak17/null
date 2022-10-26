import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./common";
import ProductList from "../../src/pages/ProductList";
import { productListResponse } from "./mockedResponses";
import mockAxios from "jest-mock-axios";

jest.mock("axios");

describe("ProductList component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("Renders successfully", () => {
    mockAxios.get.mockResolvedValueOnce(productListResponse);
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductList />
        </Provider>
      </BrowserRouter>
    );
    expect(component.getByTestId("list-page")).toBeInTheDocument();
  });
});
