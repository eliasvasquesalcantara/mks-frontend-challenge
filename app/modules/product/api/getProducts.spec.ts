import { IProductDto, IProductsApiResponse } from "../types";
import { getProducts } from "./getProducts";
import axios from "axios";

jest.mock("axios");

const basicResponse: Partial<IProductsApiResponse> = {
  products: [],
  count: 1,
};

describe("getProducts", () => {
  describe("should validate against invalid response", () => {
    it("should throw erro if response does NOT contain products array", async () => {
      const responseMock = { ...basicResponse };
      delete responseMock.products;

      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: responseMock,
        })
      );

      let threwError: boolean = false;
      try {
        await getProducts();
      } catch (error) {
        threwError = true;
      }

      expect(threwError).toBe(true);
    });

    it("should throw erro if response does NOT contain count property", async () => {
      const responseMock = { ...basicResponse };
      delete responseMock.count;

      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: responseMock,
        })
      );

      let threwError: boolean = false;
      try {
        await getProducts();
      } catch (error) {
        threwError = true;
      }

      expect(threwError).toBe(true);
    });

    it("should throw error if properties of items from 'products' array are NOT typed correctly", async () => {
      const product: IProductDto = {
        brand: "Test",
        description: "Test",
        id: 1,
        name: 1, // invalid type
        photo: "Test",
        price: "1,00",
      } as any;

      const responseMock = { ...basicResponse };
      responseMock.products?.push(product as any);

      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: responseMock,
        })
      );

      let threwError: boolean = false;
      try {
        await getProducts();
      } catch (error) {
        threwError = true;
      }

      expect(threwError).toBe(true);
    });

    it("should throw error if 'price' CANNOT be converted to number", async () => {
      const responseMock = { ...basicResponse };

      const product: IProductDto = {
        brand: "Test",
        description: "Test",
        id: 1,
        name: "Test",
        photo: "Test",
        price: "Test", // Invalid number
      };

      responseMock.products?.push(product);

      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: responseMock,
        })
      );

      let threwError: boolean = false;
      try {
        await getProducts();
      } catch (error) {
        threwError = true;
      }

      expect(threwError).toBe(true);
    });

    it("should return price converted to number", async () => {
      const responseMock = { ...basicResponse };

      const product: IProductDto = {
        brand: "Test",
        description: "Test",
        id: 1,
        name: "Test",
        photo: "Test",
        price: "59,00",
      };

      responseMock.products?.push(product);

      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: responseMock,
        })
      );

      let threwError: boolean = false;
      let response: any;
      try {
        response = await getProducts();
      } catch (error) {
        threwError = true;
      }

      expect(response?.products?.[0]?.price).toBe(59);
    });
  });
});
