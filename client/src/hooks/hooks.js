import { useState, useEffect } from "react";
import axios from "axios";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChanges = e => {
    setValue(e.target.value);
  };

  const clearField = () => {
    setValue(initialValue);
  };

  return [value, handleChanges, clearField];
};
