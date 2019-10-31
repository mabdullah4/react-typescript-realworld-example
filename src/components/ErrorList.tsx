import * as React from "react";

export interface ErrorListProps {
  errors: any;
}

const ErrorList: React.SFC<ErrorListProps> = ({ errors }) => {
  if (!errors) {
    return null
  }
  return (
    <ul className="error-messages">
      {Object.keys(errors).map((error: string) => errors[error].length>0? (
        <li key={error}>{errors[error]}</li>
      ):"")}
    </ul>
  );
};

export default ErrorList;
