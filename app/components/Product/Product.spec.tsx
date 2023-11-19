import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  it("should render the product image", () => {
    render(<Product />);

    expect(screen.getByAltText("Product image")).toBeInTheDocument();
  });

  it("should render the product name", () => {
    render(<Product />);

    expect(screen.getByTestId("name").innerHTML).not.toBe("");
  });

  it("should render the product description", () => {
    render(<Product />);

    expect(screen.getByTestId("description").innerHTML).not.toBe("");
  });

  it("should render the product price", () => {
    render(<Product />);

    expect(screen.getByText(/R$/i)).toBeInTheDocument();
  });

  it("should render purchase button", () => {
    render(<Product />);

    expect(screen.getByText(/comprar/i)).toBeInTheDocument();
  });
});
