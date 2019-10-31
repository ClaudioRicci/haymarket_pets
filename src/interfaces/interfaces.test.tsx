import { EditRow } from "./interfaces";

it('Has a "name" state with a type of string', () => {
  const state: EditRow = { name: "string" };
  expect(state.name).toEqual("string");
});

it('Has a "type" state with a type of string', () => {
  const state: EditRow = { type: "string" };
  expect(state.type).toEqual("string");
});

it('Has a "age" state with a type of number', () => {
  const state: EditRow = { age: "number" };
  expect(state.age).toEqual("number");
});
