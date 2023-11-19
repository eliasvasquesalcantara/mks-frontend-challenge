import React from "react";
import * as S from "./ProductsGrid.styles";

interface ProductGridProps {
  children: React.ReactNode;
}

function ProductsGrid({ children }: ProductGridProps): JSX.Element {
  return <S.Container>{children}</S.Container>;
}

export default ProductsGrid;
