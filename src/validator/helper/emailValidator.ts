function emailValidator(email: string, errorMsg: string = "Invalid Email Address"): string {
    return !email.match(/.+@.+\..+/) ? errorMsg : "";
}

export default emailValidator;
