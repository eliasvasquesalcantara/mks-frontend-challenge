import React, { useContext } from "react";
import * as S from "./ShoppingCart.styles";
import CartItem from "../CartItem/CartItem";
import ShoppingCartContext from "app/context/shoppingCart";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "app/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

interface ShoppingCartProps {}

function ShoppingCart({}: ShoppingCartProps): JSX.Element {
  const shoppingCart = useContext(ShoppingCartContext);

  const productsInfo = useSelector((state: RootState) => state.cartSlice);

  const dispatch = useDispatch();

  return (
    <S.Container
      animate={{
        x: shoppingCart.open ? 0 : "100%",
      }}
      initial={{ x: "100%" }}
      transition={{ delay: 0.2 }}
    >
      <S.Header>
        <S.Title>
          Carrinho <br /> de compras
        </S.Title>

        <S.CartCloseContainer
          data-testid="shopping-cart-close"
          onClick={() => {
            shoppingCart.setOpen(false);
          }}
        >
          <S.CartCloseX>x</S.CartCloseX>
        </S.CartCloseContainer>
      </S.Header>

      <S.ItemsContainer>
        {Object.keys(productsInfo.products).map((id) => {
          const { photo, name, price, quant } =
            productsInfo.products[parseInt(id)];
          return (
            <CartItem
              imageSrc={photo}
              name={name}
              price={price}
              quant={quant}
              key={id}
              close={() => {
                dispatch(removeProduct({ id: parseInt(id) }));
              }}
              increment={() => {
                dispatch(incrementProduct({ id: parseInt(id) }));
              }}
              decrement={() => {
                dispatch(decrementProduct({ id: parseInt(id) }));
              }}
            />
          );
        })}
      </S.ItemsContainer>

      <S.TotalContainer>
        <span>Total:</span>
        <span>{productsInfo.total}</span>
      </S.TotalContainer>

      <S.FinalizePurchaseButton>Finalizar Compra</S.FinalizePurchaseButton>
    </S.Container>
  );
}

export default ShoppingCart;
