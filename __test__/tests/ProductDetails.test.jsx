import mockAxios from "jest-mock-axios";
import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./common";
import ProductDetails from "../../src/pages/ProductDetails";
import { productDetailsResponse } from "./mockedResponses";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "TyVJrrYOXZ7tUIp5CmQpf" }),
}));

describe("ProductDetails component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("Renders successfully without data", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetails />
        </Provider>
      </BrowserRouter>
    );
    expect(component.getByTestId("details-page")).toBeInTheDocument();
  });

  it("Renders successfully with mock data", async () => {
    mockAxios.get.mockResolvedValueOnce(productDetailsResponse);

    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetails />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(component.getByTestId("details-page")).toBeInTheDocument();
      expect(component.getByTestId("image")).toBeInTheDocument();
      expect(component.getByTestId("description")).toBeInTheDocument();
      expect(component.getByTestId("actions")).toBeInTheDocument();
    });
  });
});
