import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Players from "./components/Players";
import { person } from "./components/Players";
import Navbar from "./components/Navbar";
import name from "./components/Players";
import { doesNotReject } from "assert";

test("App renders without crashing", () => {
  const component = render(<App />);
  //console.log(component);
});

test("Navbar renders without crashing", () => {
  const component = render(<Navbar />);
});

test("Is there a playersCont", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/playersCont/i);
});

test("Is there a toggle", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/toggle/i);
});

test("Is there text on screen", () => {
  const { getByText } = render(<App />);
  expect(getByText(/world cup players/i));
});

// test("text on screen", done => {
//   const { getByText } = render(<App />);
//   expect(getByText(/searches/i));
//   done();
// });

// test("examples of some things", async () => {
//   const player = "Alex Morgan";
//   const container = playersCont;
//   getByText(container, "Print Username");
//   await wait(() =>
//     expect(queryByTestId(container, "Alex Morgan")).toBeTruthy()
//   );
// });

// test("properly test a Promise", () => {
//   return somePromise.then(value => {
//     expect(value).toBeTrue();
//   });
// });

// it("is an example using flushPromises", async () => {
//   const wrapper = render(<App />);
//   await flushPromises();
//   wrapper.update(); // In my experience, Enzyme didn't always facilitate component updates based on state changes resulting from Promises -- hence this forced re-render

//   // make assertions
//   const personOnScreen = wrapper.find(name);
//   expect(personOnScreen).toMatch("");
// });
