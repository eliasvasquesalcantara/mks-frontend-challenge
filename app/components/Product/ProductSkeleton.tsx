import { Skeleton } from "@mui/material";
import * as S from "./Product.styles";

function ProductSkeleton() {
  return (
    <>
      <S.Container>
        {/* Image */}
        <Skeleton
          variant="rectangular"
          width={111}
          height={138}
          sx={{ marginBottom: "14px" }}
        />

        <div
          style={{
            marginBottom: "8px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Title */}
          <Skeleton variant="rectangular" width={124} height={30} />
          {/* Price */}
          <Skeleton variant="rectangular" width={64} height={26} />
        </div>

        {/* Price */}
        <Skeleton variant="rounded" width={192} height={30} />

        <S.BuyButton>
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
    </>
  );
}

export default ProductSkeleton;
