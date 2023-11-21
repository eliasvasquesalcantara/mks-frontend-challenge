import axios from "axios";
import { IProductEntity, IProductsParsedApiResponse } from "../types";
import { isProduct } from "../isProduct";

export async function getProducts(): Promise<IProductsParsedApiResponse> {
  const { data } = await axios.get(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
  );

  const areAllProducts = data.products.every((product: any) => {
    return isProduct(product);
  });

  if (!areAllProducts || data.count == null)
    throw new Error("Invalid request response");

  // Convert Price
  const products: IProductEntity = data.products.map((product: any) => {
    const price = parseInt(product.price);

    if (Number.isNaN(price)) {
      throw new Error("Price invalid format");
    }

    return {
      ...product,
      price,
    };
  });

  return {
    ...data,
    products,
  };
}
