import React from "react";
import dataRendering from "./dataRendering";
import Navbar from "./nav";
import * as sample from "../components/mytestedfunctions";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it('renders "World Women" text', () => {
  const wrapper = rtl.render(<Navbar />);
  const element = wrapper.queryByText(/World Women/i);
  // wrapper.debug();

  expect(element).toBeTruthy(); //
  expect(element).toBeInTheDocument();
  expect(element).not.toBeNaN();
  expect(element).toBeVisible();
});

it("should render test", () => {});

///unite testing
describe("sample testing", () => {
  it("returns a value that is defined", () => {
    expect(sample.addition(1, 1)).toBe(2);
  });
  describe("five function", () => {
    it("returns seven", () => {
      expect(sample.seven()).toBe(7); // toEqual with [] {}
    });
    it("returns a value that is defined", () => {
      expect(sample.seven()).not.toBeUndefined();
    });
    it("returns a value greater than 5", () => {
      expect(sample.seven()).toBeGreaterThan(5);
    });
    it("returns a value not NaN", () => {
      expect(sample.seven()).not.toBeNaN();
    });
    it("returns a value smaller than 8", () => {
      expect(sample.seven()).toBeLessThan(8);
    });
  });
});
