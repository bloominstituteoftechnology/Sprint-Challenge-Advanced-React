import React from "react";
import useEmail from "../hooks/useEmail";

const EmailInput = () => {
  const [isValid, onEmailChange] = useEmail();

  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input onChange={onEmailChange} />
      {!isValid && <p>Please add your email</p>}
    </div>
  );
};

export default EmailInput;
