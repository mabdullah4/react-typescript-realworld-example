import IRegisterForm from "../model/IRegisterForm";
import emailValidator from "./helper/emailValidator";
import minLengthValidator from "./helper/minLengthValidator";

const registerValidator = (values: IRegisterForm) => {
  let errors: IRegisterForm = { email: "", password: "", username: "" };

  errors.username = minLengthValidator(
    values.username,
    "User Name must have 8 character atleast"
  );
  errors.email = emailValidator(values.email);
  errors.password = minLengthValidator(
    values.password,
    "Password must have 8 character atleast"
  );

  return errors;
};

export default registerValidator;
