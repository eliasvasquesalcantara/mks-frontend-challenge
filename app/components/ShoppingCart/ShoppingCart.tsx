import React, { useContext } from "react";
import * as S from "./ShoppingCart.styles";
import CartItem from "../CartItem/CartItem";
import ShoppingCartContext from "app/context/shoppingCart";

interface ShoppingCartProps {}

function ShoppingCart({}: ShoppingCartProps): JSX.Element {
  const shoppingCart = useContext(ShoppingCartContext);

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
        <CartItem />
        <CartItem />
      </S.ItemsContainer>

      <S.TotalContainer>
        <span>Total:</span>
        <span>R$798</span>
      </S.TotalContainer>

      <S.FinalizePurchaseButton>Finalizar Compra</S.FinalizePurchaseButton>
    </S.Container>
  );
}

export default ShoppingCart;
