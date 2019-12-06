import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from "./App";

describe("sum", () => {
  it("1 + 2", () => {
    const expected = 3;
    const actual = App.sum(1, 2);
    expect(actual).toBe(expected);
  });
});
