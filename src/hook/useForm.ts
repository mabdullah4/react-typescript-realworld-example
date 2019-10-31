import { useState, FormEventHandler } from "react";

const useForm = <T>(initialValues: T, validator: Function) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<T>();
  const [isSubmitting, setSubmitting] = useState(false);

  const validate = () => {
    const validationErrors = validator(values);
    setErrors(validationErrors);

    if (validationErrors && Object.keys(validationErrors).length !== 0) {
      setSubmitting(false);
    } else {
      setSubmitting(true);
    }
  };

  const handleBlur = <BlurEvent>(e: BlurEvent) => validate();

  const handleChange = (e: any) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    validate();
    if (!isSubmitting) {
      console.log(errors);
    } else {
      console.log(values);
    }
  };

  return {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting
  };
};

export default useForm;
