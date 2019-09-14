import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue, callback) => {
  const [values, setValues] = useLocalStorage(key, initialValue || {});
  const handleChanges = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };
  return [values, handleChanges, handleSubmit];
};