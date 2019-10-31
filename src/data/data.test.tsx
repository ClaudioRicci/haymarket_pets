import { data } from "./data";

describe("test data type check", () => {
  test("should be type object", () => {
    const testData = data;
    expect(typeof testData).toBe("object");
  });

  test("test data should exist", () => {
    const testData: any = data;
    expect(testData).toBeTruthy();
  });
});
