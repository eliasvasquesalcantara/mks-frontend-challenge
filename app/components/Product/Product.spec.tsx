import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product", () => {
  it("should render Product with the given values", () => {
    render(
      <Product
        brand=""
        description="Description Test"
        id={1}
        name="Name Test"
        photo="Given-Src"
        price={1}
        key=""
        onBuyClick={async () => {}}
      />
    );

    expect(screen.getByTestId("product-description").innerHTML).toBe(
      "Description Test..."
    );
    expect(screen.getByTestId("product-name").innerHTML).toBe("Name Test");
    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "Given-Src"
    );
    expect(screen.getByTestId("product-price").innerHTML).toBe("R$1");
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
        onBuyClick={async () => {}}
      />
    );

    expect(screen.getByText(/comprar/i)).toBeInTheDocument();
  });
});
