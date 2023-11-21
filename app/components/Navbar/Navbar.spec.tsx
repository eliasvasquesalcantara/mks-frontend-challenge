import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "store";

describe("Navbar", () => {
  it("should render logo", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(getByText("MKS")).toBeInTheDocument();
    expect(getByText("Sistemas")).toBeInTheDocument();
  });

  it("should render cart button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    expect(getByTestId("cart")).toBeInTheDocument();
    
  });
});
