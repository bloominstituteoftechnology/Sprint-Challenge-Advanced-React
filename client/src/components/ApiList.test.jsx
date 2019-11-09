import React from "react";
import ReactDOM from "react-dom";
import ApiList from "./ApiList";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const testApiList = [
    {
      name: "Test Name 1",
      country: "Test Country 1",
      id: 5000,
      searches: 2
    },
    {
      name: "Test Name 2",
      country: "Test Country 2",
      id: 10000,
      searches: 5
    }
  ];
  const div = document.createElement("div");
  rtl.render(<ApiList list={testApiList} />, div);
});
