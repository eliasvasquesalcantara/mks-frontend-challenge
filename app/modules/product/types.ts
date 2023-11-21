export interface IProductDto {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
}

export interface IProductEntity {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;

  // What diff from Dto
  price: number;
}

export interface IProductsApiResponse {
  products: IProductDto[];
  count: number;
}

export interface IProductsParsedApiResponse {
  products: IProductEntity[];
  count: number;
}
