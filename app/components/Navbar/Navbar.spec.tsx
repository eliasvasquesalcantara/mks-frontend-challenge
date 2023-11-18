import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render logo", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("MKS")).toBeInTheDocument();
    expect(getByText("Sistemas")).toBeInTheDocument();
  });

  it("should render cart button", () => {
    const { getByTestId } = render(<Navbar />);

    expect(getByTestId("cart")).toBeInTheDocument();
  });
});
