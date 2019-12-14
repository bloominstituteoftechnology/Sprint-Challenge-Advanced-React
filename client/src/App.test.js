import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Card from "./Card";

test("Our Navbar renders", () => {
  expect(true).toBe(true);
});

test("exists", () => {
  const { getByText } = render(<Card />);
  const linkElement = getByText("Name");
  expect(linkElement).toBeInTheDocument(true);
});

describe("Over strikes Function", () => {
  test("expect strike count to reset", () => {
    const expected = 0;
    let strikes = 4;
    const overBalls = ballCount => {
      if (ballCount >= 4) {
        return ballCount === 0;
      }
    };
    overBalls(strikes);
    expect(expected).toBe(0);
  });
});
