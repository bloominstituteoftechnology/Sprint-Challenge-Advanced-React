import React, { useState } from "react";



import { useForm } from "../hooks/useForm";



export default function SignupForm() {
  
  //const [username, handleUsernameChanges, setUsername] = useInput("");
  //const [email, handleEmailChanges, setEmail] = useInput("");
  const [values, changeHandler, clearForm, handleSubmit] = useForm(
    "signupForm",
    {
      username: "",
      email: ""
    }
  );

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   alert(`your form was submitted for: ${values.username}:${values.email}`);
  // };

  // const clearFormHandler = e => {
  //   e.preventDefault();
  //   // setUsername("");
  //   // setEmail("");
  // };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Whos your favorit Player?</legend>
          <input
          type='text'
            id="outlined-name"
            label="Username"
            placeholder='favoritPlayer'
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

// const useInput = () => {
//   // state variables and updates
//   const [value, setValue] = useState("");
//   // change handler (handleChanges)
//   const handleChanges = e => {
//     setValue(e.target.value);
//   };
//   // const clearFormHandler = e => {
//   //   setValue("");
//   // };

//   return [value, handleChanges, setValue];
// };
