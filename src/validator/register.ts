import IRegisterForm from "../model/IRegisterForm";

const registerValidator = (values: IRegisterForm) => {
  let errors: IRegisterForm = { email: "", password: "", username: "" };

  if (values.username.length < 8) {
    errors.username = "Invalid username";
  }

  if (!values.email.match(/.+\@.+\..+/)) {
    errors.email = "Invalid Email Address";
  }

  if (values.password.length < 8) {
    errors.password = "Password should be minimum 8 characters";
  }

  return errors;
};

export default registerValidator;
