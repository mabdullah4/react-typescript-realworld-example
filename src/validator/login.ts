import ILoginForm from "../model/ILoginForm";
import emailValidator from "./helper/emailValidator";
import minLengthValidator from "./helper/minLengthValidator";

const loginValidator = (values: ILoginForm) => {
    const errors: ILoginForm = { email: "", password: "" };

    errors.email = emailValidator(values.email);
    errors.password = minLengthValidator(values.password, "Password must have minimum 8 characters");

    return errors;
};

export default loginValidator;
