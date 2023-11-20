import React from "react";
import * as S from "./ShoppingCart.styles";
import CartItem from "../CartItem/CartItem";

interface ShoppingCartProps {}

function ShoppingCart({}: ShoppingCartProps): JSX.Element {
  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Carrinho <br /> de compras
        </S.Title>

        <S.CartCloseContainer data-testid="shopping-cart-close">
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
