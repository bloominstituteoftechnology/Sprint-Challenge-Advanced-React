import { render } from "@testing-library/React";
import React from "react";
import WorldCupCard from "./WorldCupCard";

describe("<WorldCupCard />", () => {
  it("renders without crashing", () => {
    render(<WorldCupCard />);
  });
});

describe("<WorldCupCard />", () => {
  const container = render(<WorldCupCard />);
  console.log(container);
  // Act - getting the node by text
  container.getByText(/country:/i);
  container.getByText(/search ranking:/i);
});
