import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, innitialValue) => {
  const [value, setValue] = useState(innitialValue);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }, [url]);
  return [value, url];
};
