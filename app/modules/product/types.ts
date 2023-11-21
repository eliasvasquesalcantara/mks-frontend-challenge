export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export interface IProductsApiResponse {
  products: IProduct[];
  count: number;
}
