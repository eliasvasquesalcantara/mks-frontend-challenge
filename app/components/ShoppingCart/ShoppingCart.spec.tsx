import { render, screen, waitFor } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";
import "@testing-library/jest-dom/extend-expect";
import ShoppingCartContext from "app/context/shoppingCart";

describe("ShoppingCart", () => {
  it("should render the title", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  });

  it("should render a close button", async () => {
    render(<ShoppingCart />);

    expect(screen.getByTestId("shopping-cart-close")).toBeInTheDocument();
  });

  it("should render a finalize purchase", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("Finalizar Compra")).toBeInTheDocument();
  });

  it("should NOT show cart if provide pass open equals to false", () => {
    render(
      <ShoppingCartContext.Provider
        value={{ open: false, setOpen: () => undefined }}
      >
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    );

    waitFor(() =>
      expect(screen.queryByText("Carrinho de compras")).not.toBeInTheDocument()
    );
  });

  it("should show cart if provide pass open equals to false", () => {
    render(
      <ShoppingCartContext.Provider
        value={{ open: true, setOpen: () => undefined }}
      >
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    );

    waitFor(() =>
      expect(screen.getByText("Carrinho de compras")).toBeInTheDocument()
    );
  });

  it.todo("should render the total");

  it.todo("should render the correct quantity of items");
});
