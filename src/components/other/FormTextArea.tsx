import * as React from "react";

export interface FormTextAreaProps {
    placeholder: string;
    name: string;
    type?: string;
    handleChange: any;
    handleBlur?: any;
    classes?: string;
    value?: string;
}

const FormTextArea: React.FunctionComponent<FormTextAreaProps> = ({ name, placeholder, handleChange, handleBlur, classes = "", value }) => {
    return (
        <fieldset className="form-group">
            <textarea
                className={`form-control ${classes}`}
                rows={8}
                onChange={handleChange}
                onBlur={handleBlur}
                name={name}
                placeholder={placeholder}
                defaultValue={value}
            />
        </fieldset>
    );
};

export default FormTextArea;
