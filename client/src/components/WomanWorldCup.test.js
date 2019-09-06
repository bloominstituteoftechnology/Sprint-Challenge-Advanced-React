import { render } from "@testing-library/React";
import React from "react";
import WomanWorldCup from "./WomanWorldCup";

describe("<WomanWorldCup />", () => {
  it("renders without crashing", () => {
    render(<WomanWorldCup />);
  });
});
