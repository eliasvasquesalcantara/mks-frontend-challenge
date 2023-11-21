import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductEntity } from "app/modules/product/types";

interface CartState {
  products: {
    [key: number]: IProductEntity & { quant: number };
  };
  total: number;
}

const initialState: CartState = {
  products: {},
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ product: IProductEntity }>) => {
      const productInStore = state.products[action.payload.product.id];

      if (productInStore != null) {
        cartSlice.caseReducers.incrementProduct(state, {
          ...action,
          payload: { id: action.payload.product.id },
        });
        return;
      } else
        state.products[action.payload.product.id] = {
          ...action.payload.product,
          quant: 1,
        };

      // Total
      state.total += action.payload.product.price;
    },
    incrementProduct: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products[action.payload.id];

      state.products[action.payload.id].quant = product.quant + 1;

      // Total
      state.total += product.price;
    },
    decrementProduct: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products[action.payload.id];

      if (product == null) return;

      if (product.quant <= 1) {
        cartSlice.caseReducers.removeProduct(state, {
          ...action,
          payload: { id: action.payload.id },
        });
        return;
      }

      state.products[action.payload.id].quant = product.quant - 1;

      // Total
      state.total -= product.price;
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.products[action.payload.id];

      delete state.products[action.payload.id];

      // Total
      state.total -= product.price * product.quant;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, incrementProduct, decrementProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
