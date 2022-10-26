import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./common";
import Image from "../../src/components/Image";

const randomPictureUrl =
  "https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage.png";
const localRoute = "http://localhost/";

describe("Image component", () => {
  it("Renders successfully with picture", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Image imageUrl={randomPictureUrl} />
        </Provider>
      </BrowserRouter>
    );
    expect(component.getByTestId("image")).toBeInTheDocument();
    expect(component.getByTestId("image").src).toEqual(randomPictureUrl);
  });

  it("Renders successfully image placeholder when there is no picture", () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Image />
        </Provider>
      </BrowserRouter>
    );
    expect(component.getByTestId("image")).toBeInTheDocument();
    expect(localRoute.concat("mobile_placeholder.jpg")).toContain(
      component.getByTestId("image").src
    );
  });
});
