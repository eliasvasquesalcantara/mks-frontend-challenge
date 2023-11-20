import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";
import '@testing-library/jest-dom/extend-expect'

describe("ShoppingCart", () => {
  it("should render the title", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  });

  it("should render a close button", async () => {
    render(<ShoppingCart />);

    expect(screen.getByTestId('shopping-cart-close')).toBeInTheDocument()
  });

  
  it.todo("should render the total");
  
  it("should render a finalize purchase", () => {
    render(<ShoppingCart />);

    expect(screen.getByText('Finalizar Compra')).toBeInTheDocument()
  });

  it.todo("should render the correct quantity of items");
});
