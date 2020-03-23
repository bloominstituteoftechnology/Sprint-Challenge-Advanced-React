import useLocalStorage from "./LocalStorage.js";

export function useForm(key, initialValues) {

  const [values, setValues] = useLocalStorage(key, initialValues);
  const handleChanges = e => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  const handleSubmit = e => {
    e.preventDefault();

    clearForm();
  };

  return [values, handleChanges, clearForm, handleSubmit];
}