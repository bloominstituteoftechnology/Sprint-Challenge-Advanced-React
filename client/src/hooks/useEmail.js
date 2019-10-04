import { useState } from "react";

const useEmail = () => {
  const [isEmail, setIsEmail] = useState(false);

  const onChange = event => {
    let valid = false;
    let input = event.target.value;
    if (input.length > 0) {
      valid = true;
    }
    setIsEmail(valid);
  };

  return [isEmail, onChange];
};

export default useEmail;
