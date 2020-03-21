import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);


});



test('test for place holders for favoritPlayer',()=>{
  const container = render(<App />);
  console.log('container: ', container);
  container.findByPlaceholderText(/favorit player/i);

})



