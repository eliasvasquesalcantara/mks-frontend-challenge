import styled from "styled-components";

export const Container = styled.div`
  width: 379px;
  height: 95px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: -2px 2px 10px 0px #0000000d;

  display: flex;
  align-items: center;

  padding-left: 23px;
  padding-right: 33px;

  position: relative;
`;

export const Image = styled.img`
  width: 46px;
  height: 57px;

  margin-right: 21px;
`;

export const Name = styled.p`
  width: 113px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  color: #2c2c2c;

  margin-right: 9px;
`;

export const QuantWrapper = styled.div`
    position: relative;
`
export const QuantLabel = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 0.5rem;
  font-weight: 400;
  line-height: 6px;
  letter-spacing: 0em;

  position: absolute;

  top: -8px;
  left: 0;
`;

export const QuantContainer = styled.div`
  width: 50px;
  height: 19px;

  border-radius: 4px;
  border: 0.3px solid #bfbfbf;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 40px;
`;

export const QuantDivider = styled.div`
  height: 11.5px;
  border: 0.2px solid #bfbfbf;
`;

export const QuantText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0em;

  width: 5px;
  text-align: center;
  margin: 0 4px;
`;

export const QuantCounter = styled(QuantText)`
  margin: 0 5.5px;
`;

export const QuantOperator = styled(QuantText)`
  cursor: pointer;
`;

export const Price = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  color: #000000;
`;

export const Close = styled.div`
  width: 18px;
  height: 18px;

  background-color: #000000;
  color: #ffffff;

  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: center;

  border-radius: 100%;
  cursor: pointer;

  position: absolute;
  right: -5px;
  top: -5px;

`;
