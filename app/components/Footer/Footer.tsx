import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #eeeeee;

  width: 100%;
  height: 34px;

  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface FooterProps {}

function Footer({}: FooterProps): JSX.Element {
  return <Container>MKS sistemas © Todos os direitos reservados</Container>;
}

export default Footer;
