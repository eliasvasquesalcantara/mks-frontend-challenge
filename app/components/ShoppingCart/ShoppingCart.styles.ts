import styled from "styled-components";
import { CloseContainer, CloseX } from "../Parts/CloseButton";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 486px;

  padding-left: 47px;
  padding-top: 36px;

  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 32.91px;
  letter-spacing: 0em;
  color: #fff;

  width: 180px;
`;

export const CartCloseContainer = styled(CloseContainer)`
  margin-right: 22px;
`;

export const CartCloseX = styled(CloseX)`
  font-family: "Montserrat", sans-serif;
  font-size: 2.8rem;
  font-weight: 400;
  line-height: 15px;
  color: #fff;

  transform: translateY(
    -2px
  ); /* Because the "x" is lowercase, giving the impression that is not aligned */
`;

export const ItemsContainer = styled.div`
  margin-top: 66.5px;

  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const FinalizePurchaseButton = styled.button`
  height: 97px;
  background-color: #000000;
  color: #fff;
  border: none;

  font-family: "Montserrat", sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  cursor: pointer;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: "Montserrat", sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  color: #ffffff;

  position: absolute;
  bottom: 139px;
  left: 0;
  right: 0;

  padding-left: 47px;
  padding-right: 63px;
`;
