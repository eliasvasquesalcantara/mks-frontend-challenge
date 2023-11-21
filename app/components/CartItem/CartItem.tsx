import React from "react";
import * as S from "./CartItem.styles";

interface CartItemProps {
  name: string;
  quant: number;
  price: number;
  imageSrc: string;
  close: () => void;
  decrement: () => void;
  increment: () => void;
}

function CartItem({
  imageSrc,
  name,
  price,
  quant,
  close,
  decrement,
  increment,
}: CartItemProps): JSX.Element {
  return (
    <S.Container>
      <S.Image src={imageSrc} alt="" />

      <S.Name>{name}</S.Name>

      <S.QuantWrapper>
        <S.QuantLabel>Qtd:</S.QuantLabel>
        <S.QuantContainer>
          <S.QuantOperator
            onClick={() => {
              decrement();
            }}
          >
            -
          </S.QuantOperator>
          <S.QuantDivider />
          <S.QuantCounter>{quant}</S.QuantCounter>
          <S.QuantDivider />
          <S.QuantOperator
            onClick={() => {
              increment();
            }}
          >
            +
          </S.QuantOperator>
        </S.QuantContainer>
      </S.QuantWrapper>

      <S.Price>R${price * quant}</S.Price>

      <S.ItemCloseContainer
        onClick={() => {
          close();
        }}
      >
        <S.ItemCartCloseX>x</S.ItemCartCloseX>
      </S.ItemCloseContainer>
    </S.Container>
  );
}

export default CartItem;
