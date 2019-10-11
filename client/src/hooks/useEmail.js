import { useState } from "react";

const useEmail = () => {
  const [isEmail, setIsEmail] = useState(false);

  const onChange = event => {
    let valid = false;
    let input = event.target.value;
    if (input.includes("@")) {
      valid = true;
    } else 
      valid = false
    setIsEmail(valid);
  };

  return [isEmail, onChange];
};

export default useEmail;
