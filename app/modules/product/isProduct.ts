import { IProduct } from "./types";

export function isProduct(payload: any): payload is IProduct {
  return (
    "id" in payload &&
    "name" in payload &&
    "brand" in payload &&
    "description" in payload &&
    "price" in payload &&
    "photo" in payload
  );
}
