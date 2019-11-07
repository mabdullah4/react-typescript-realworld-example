import * as React from "react";

export interface FormInputProps {
    placeholder: string;
    name: string;
    type?: string;
    handleChange: any;
    handleBlur?: any;
    classes?: string;
    value?: string;
}

const FormInput: React.FunctionComponent<FormInputProps> = ({ name, placeholder, type = "text", handleChange, handleBlur, classes = "", value }) => {
    return (
        <fieldset className="form-group">
            <input
                type={type}
                className={`form-control ${classes}`}
                placeholder={placeholder}
                onChange={handleChange}
                name={name}
                onBlur={handleBlur}
                defaultValue={value}
            />
        </fieldset>
    );
};

export default FormInput;
