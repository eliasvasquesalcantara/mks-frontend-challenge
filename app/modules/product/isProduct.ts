import { IProductDto } from "./types";

export function isProduct(payload: any): payload is IProductDto {
  return (
    typeof payload?.id === "number" &&
    "id" in payload &&
    typeof payload?.name === "string" &&
    "name" in payload &&
    typeof payload?.brand === "string" &&
    "brand" in payload &&
    typeof payload?.description === "string" &&
    "description" in payload &&
    typeof payload?.price === "string" &&
    "price" in payload &&
    typeof payload?.photo === "string" &&
    "photo" in payload
  );
}
