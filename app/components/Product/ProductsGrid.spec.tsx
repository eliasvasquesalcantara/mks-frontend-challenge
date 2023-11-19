import { render, screen } from "@testing-library/react";
import ProductsGrid from "./ProductsGrid";

describe("ProductsGrid", () => {
  it("should render all the elements passed as children", () => {
    render(
      <ProductsGrid>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>d</p>
        <p>e</p>
        <p>f</p>
      </ProductsGrid>
    );

    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
    expect(screen.getByText("c")).toBeInTheDocument();
    expect(screen.getByText("d")).toBeInTheDocument();
    expect(screen.getByText("e")).toBeInTheDocument();
    expect(screen.getByText("f")).toBeInTheDocument();
  });
});
