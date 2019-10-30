import * as React from "react";

export interface ErrorListProps {
  errors: string[];
}

const ErrorList: React.SFC<ErrorListProps> = ({ errors }) => {
  return (
    <ul className="error-messages">
      {errors.map(error => (
        <li>error</li>
      ))}
    </ul>
  );
};

export default ErrorList;
