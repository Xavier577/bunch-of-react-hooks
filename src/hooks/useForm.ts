import { useState, ChangeEventHandler } from "react";
import { FormFields } from "../types/interfaces";
import { DataCollectionElement } from "../types/types";

const useForm = (initialValues: FormFields) => {
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange: ChangeEventHandler<DataCollectionElement> = (event) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }));
  };

  return [formValues, handleChange];
};

export default useForm;
