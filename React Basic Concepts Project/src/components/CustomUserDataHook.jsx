import { useState } from "react";

const useFormHook = (initialValues = { username: "", password: "" }) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return { formValues, handleInputChange };
};

export default useFormHook;
