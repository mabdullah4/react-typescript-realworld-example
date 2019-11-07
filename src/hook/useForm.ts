import { useState, useEffect } from "react";

const useForm = <T>(initialValues: T, validator: Function) => {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<T>();
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        let noErrors = errors && Object.values(errors).findIndex(ele => ele !== null) === -1;
        setSubmitting(!!noErrors);
    }, [errors]);

    const validate = () => setErrors(validator(values));
    const handleBlur = (e: any) => validate();
    const handleChange = (e: any) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = (e: any) => validate();

    return {
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        isSubmitting
    };
};

export default useForm;
