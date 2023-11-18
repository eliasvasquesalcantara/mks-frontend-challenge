import styled from "styled-components";

export const Container = styled.ul`
  background-color: #0f52ba;

  width: 100%;
  height: 101px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 65px;
  padding-right: 88px;
`;

export const LogoMks = styled.span`
  font-size: 4rem;
  font-weight: 600;
  line-height: 19px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin-right: 8px;
`;

export const LogoSistemas = styled.span`
  font-size: 2rem;
  font-weight: 300;
  line-height: 19px;
  font-family: "Montserrat", sans-serif;
  color: #fff;
`;

export const CartButtonContainer = styled.div`
  width: 90px;
  height: 45px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 8px;
`;

export const CartButtonQuantity = styled.span`
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
