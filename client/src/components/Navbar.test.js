import React from "react";
// import { render } from "react-testing-library";
import { render, fireEvent , queryByAttribute} from "@testing-library/react";
import App from "../App";
import Navbar from "./Navbar";

const getById = queryByAttribute.bind(null, 'id');

test("render with dark mode default", ()=> {
    const darkmodeBtn = getById("dark-mode");
    fireEvent.Click(darkmodeBtn);

    const body = getById("body");
    expect(body).toHaveStyle("background-color: black");
})