import React, { useContext } from "react";
import * as S from "./Navbar.styles";
import ShoppingCartContext from "app/context/shoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "store";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const shoppingCart = useContext(ShoppingCartContext);

  const products = useSelector((state: RootState) => state.cartSlice.products);

  return (
    <S.Container>
      <li>
        <a>
          <S.LogoMks>MKS</S.LogoMks>
          <S.LogoSistemas>Sistemas</S.LogoSistemas>
        </a>
      </li>

      <li>
        <S.CartButtonContainer
          onClick={() => {
            shoppingCart.setOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            data-testid="cart"
          >
            <path
              d="M0.59375 0C0.267188 0 0 0.27 0 0.6C0 0.93 0.267188 1.2 0.59375 1.2H2.90937L3.41406 3.09C3.41406 3.12 3.41406 3.15 3.41406 3.15L5.31406 10.32C5.31406 10.32 5.31406 10.32 5.31406 10.35L5.9375 12.75C5.99687 13.02 6.23438 13.2 6.50156 13.2H16.0016C16.3281 13.2 16.5953 12.93 16.5953 12.6C16.5953 12.27 16.3281 12 16.0016 12H6.97656L6.65 10.74L17.2484 10.2C17.5156 10.2 17.7531 9.99 17.8125 9.72L19 3.12C19.0297 2.94 18.9703 2.76 18.8813 2.64C18.7625 2.49 18.5844 2.4 18.4062 2.4H4.45312L3.94844 0.45C3.85938 0.18 3.62188 0 3.35469 0H0.59375ZM7.71875 4.8C8.04531 4.8 8.3125 5.07 8.3125 5.4V7.8C8.3125 8.13 8.04531 8.4 7.71875 8.4C7.39219 8.4 7.125 8.13 7.125 7.8V5.4C7.125 5.07 7.39219 4.8 7.71875 4.8ZM11.2812 4.8C11.6078 4.8 11.875 5.07 11.875 5.4V7.8C11.875 8.13 11.6078 8.4 11.2812 8.4C10.9547 8.4 10.6875 8.13 10.6875 7.8V5.4C10.6875 5.07 10.9547 4.8 11.2812 4.8ZM14.8438 4.8C15.1703 4.8 15.4375 5.07 15.4375 5.4V7.8C15.4375 8.13 15.1703 8.4 14.8438 8.4C14.5172 8.4 14.25 8.13 14.25 7.8V5.4C14.25 5.07 14.5172 4.8 14.8438 4.8ZM7.71875 14.4C6.73906 14.4 5.9375 15.21 5.9375 16.2C5.9375 17.19 6.73906 18 7.71875 18C8.69844 18 9.5 17.19 9.5 16.2C9.5 15.21 8.69844 14.4 7.71875 14.4ZM14.8438 14.4C13.8641 14.4 13.0625 15.21 13.0625 16.2C13.0625 17.19 13.8641 18 14.8438 18C15.8234 18 16.625 17.19 16.625 16.2C16.625 15.21 15.8234 14.4 14.8438 14.4Z"
              fill="black"
            />
          </svg>
          <S.CartButtonQuantity>
            {Object.keys(products).length}
          </S.CartButtonQuantity>
        </S.CartButtonContainer>
      </li>
    </S.Container>
  );
}

export default Navbar;
