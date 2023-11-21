import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;

  width: 218px;
  height: 285px;

  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  padding-top: 18px;
  padding-left: 13px;
  padding-right: 13px;

  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 111px;
  height: 138px;

  object-fit: cover;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const Name = styled.h5`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;

  color: #2c2c2c;

  width: 124px;
`;

export const Price = styled.div`
  width: 64px;
  height: 26px;

  background-color: #373737;
  color: #fff;

  border-radius: 5px;

  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0px;
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 31.907px;

  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;

  cursor: pointer;
`;

export const BuyText = styled.span`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;
