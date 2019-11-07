import * as React from "react";

export interface ErrorListProps {
    errors: any;
}

const ErrorList: React.FunctionComponent<ErrorListProps> = ({ errors }) => {
    return (
        <ul className="error-messages">{Object.keys(errors).map((error: string) => (errors[error] ? <li key={error}>{errors[error]}</li> : ""))}</ul>
    );
};

export default ErrorList;
