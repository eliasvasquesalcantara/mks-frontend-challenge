import { IProduct } from "../types";
import { getProducts } from "./getProducts";
import axios from "axios";

jest.mock("axios");

describe("getProducts", () => {
  describe("should validate against invalid response", () => {
    it("should contain products array", async () => {
      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: { count: 0 },
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

    it("should contain count property", async () => {
      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: { products: [] },
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

    it("should products array be of the correct type", async () => {
      const productOfCorrectType: IProduct = {
        brand: "Test",
        description: "Test",
        id: 1,
        name: "Test",
        photo: "Test",
        price: 1,
      };

      const testAgainstProduct: any = { ...productOfCorrectType };
      delete testAgainstProduct.name;

      (axios.get as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          data: { products: [productOfCorrectType] },
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
  });
});
