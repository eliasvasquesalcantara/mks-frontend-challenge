import { createContext } from "react";

interface IShoppingCartContext {
  open: boolean;
  setOpen: (b: boolean) => void;
}

const ShoppingCartContext = createContext<IShoppingCartContext>({
  open: false,
  setOpen: () => undefined,
});

export default ShoppingCartContext;
