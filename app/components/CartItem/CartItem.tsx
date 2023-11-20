import React from "react";
import * as S from "./CartItem.styles";

interface CartItemProps {}

function CartItem({}: CartItemProps): JSX.Element {
  return (
    <S.Container>
      <S.Image src="/image-test.png" alt="" />

      <S.Name>Apple Watch Series 4 GPS</S.Name>

      <S.QuantWrapper>
        <S.QuantLabel>Qtd:</S.QuantLabel>
        <S.QuantContainer>
          <S.QuantOperator>-</S.QuantOperator>
          <S.QuantDivider />
          <S.QuantCounter>1</S.QuantCounter>
          <S.QuantDivider />
          <S.QuantOperator>+</S.QuantOperator>
        </S.QuantContainer>
      </S.QuantWrapper>

      <S.Price>R$399</S.Price>

      <S.Close>x</S.Close>
    </S.Container>
  );
}

export default CartItem;
