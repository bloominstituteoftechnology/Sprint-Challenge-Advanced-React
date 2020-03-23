import React, { useState } from "react";
import { useForm } from "./UseForms.js";

export default function SignupForm() {
  const [values, changeHandler, clearForm, handleSubmit] = useForm(
    "signupForm",
    {
      username: "",
      email: ""
    }
  );
  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Who is your favorite Player?</legend>
          <input
          type='text'
            id="outlined-name"
            label="Username"
            name="username"
            value={values.username}
            onChange={changeHandler}
          />
          <button color="blue" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

