import { isProduct } from "./isProduct";
import { IProductDto } from "./types";

const fullValidObj: IProductDto = {
  brand: "Test",
  description: "Test",
  id: 0,
  name: "Test",
  photo: "Test",
  price: '1,00',
};

describe("isProduct", () => {
  it("should return true if the object contains all the 6 required properties", () => {
    const dto = { ...fullValidObj };

    expect(isProduct(dto)).toBe(true);
  });

  it("should throw error if the object is empty", () => {
    const dto = {};

    expect(isProduct(dto)).toBe(false);
  });

  it("should throw error if dto does not contain 1 of the 6 properties", () => {
    const dto: any = { ...fullValidObj };
    delete dto.brand;

    expect(isProduct(dto)).toBe(false);
  });

  it("should throw error if dto does not contain 2 of the 6 properties", () => {
    const dto: any = { ...fullValidObj };
    delete dto.description;
    delete dto.price;

    expect(isProduct(dto)).toBe(false);
  });
});
