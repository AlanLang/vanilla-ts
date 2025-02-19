import { expect, test } from "bun:test";
import { createUtils } from "./createUtils";

test("createUtils", () => {
  const utils = createUtils()
    .add("sum", (a: number, b: number) => a + b)
    .add("sub", (a: number, b: number) => a - b)
    .add("mul", (a: number, b: number) => a * b)
    .add("div", (a: number, b: number) => a / b)
    .add("first", <T extends unknown[]>(array: T) => array[0]).all;

  expect(utils.sum(1, 2)).toBe(3);
  expect(utils.sub(1, 2)).toBe(-1);
  expect(utils.mul(1, 2)).toBe(2);
  expect(utils.div(1, 2)).toBe(0.5);
  expect(utils.first([1, 2, 3])).toBe(1);
  expect(utils.first(["a", "b", "c"])).toBe("a");
});
