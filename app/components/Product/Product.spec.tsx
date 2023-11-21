import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  it("should render the product image", () => {
    render(
      <Product
        brand="Test"
        description="Test"
        id={1}
        name="Test"
        photo="Test"
        price={1}
        key={"Test"}
      />
    );

    expect(screen.getByAltText("Product image")).toBeInTheDocument();
  });

  it("should render the product name", () => {
    render(
      <Product
        brand="Test"
        description="Test"
        id={1}
        name="Name Test"
        photo="Test"
        price={1}
        key={"Test"}
      />
    );

    expect(screen.getByText("Name Test")).toBeInTheDocument();
  });

  it("should render the product description", () => {
    render(
      <Product
        brand="Test"
        description="Description Test"
        id={1}
        name="Test"
        photo="Test"
        price={1}
        key={"Test"}
      />
    );

    expect(screen.getByText("Description Test")).toBeInTheDocument();
  });

  it("should render the product price", () => {
    render(
      <Product
        brand="Test"
        description="Test"
        id={1}
        name="Test"
        photo="Test"
        price={199}
        key={"Test"}
      />
    );

    expect(screen.getByText(/199/i)).toBeInTheDocument();
  });

  it("should render purchase button", () => {
    render(
      <Product
        brand="Test"
        description="Test"
        id={1}
        name="Test"
        photo="Test"
        price={1}
        key={"Test"}
      />
    );

    expect(screen.getByText(/comprar/i)).toBeInTheDocument();
  });
});
