import ILoginForm from "../model/ILoginForm";


const loginValidator = (values: ILoginForm) => {
  const errors: ILoginForm = { email: "", password: "" };

  if (!values.email.match(/.+\@.+\..+/)) {
    errors.email = "Invalid Email Address";
  }
  if (values.password.length < 8) {
    errors.password = "Password should be minimum 8 characters";
  }

  return errors;
};

export default loginValidator;
