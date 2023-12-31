import React from "react";
import * as S from "./Product.styles";
import { IProductEntity } from "app/modules/product/types";

interface ProductProps extends IProductEntity {
  onBuyClick: () => Promise<void>;
}

function Product({
  brand,
  description,
  id,
  name,
  photo,
  price,
  onBuyClick,
}: ProductProps) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Image src={photo} alt="Product image" data-testid="product-image" />
      </S.ImageWrapper>
      <S.MainInfo>
        <S.Name data-testid="product-name">{name}</S.Name>
        <S.Price data-testid="product-price">R${price}</S.Price>
      </S.MainInfo>
      <S.Description data-testid="product-description">
        {description.split(" ").slice(0, 10).join(" ") + "..."}
      </S.Description>

      <S.BuyButton onClick={onBuyClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13.5"
          viewBox="0 0 14 16"
          fill="none"
        >
          <path
            opacity="0.737212"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M1 4.375H13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <S.BuyText>COMPRAR</S.BuyText>
      </S.BuyButton>
    </S.Container>
  );
}

export default Product;
