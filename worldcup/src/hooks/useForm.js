import { useLocalStorage } from "./useLocalStorage";

export function useForm(key, initialValues) {
  // inputs = state and handleChanges
  const [values, setValues] = useLocalStorage(key, initialValues);
  const handleChanges = e => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // form/buttons = submit and clear
  const clearForm = () => {
    setValues(initialValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
   
    clearForm();
  };

  return [values, handleChanges, clearForm, handleSubmit];
}
