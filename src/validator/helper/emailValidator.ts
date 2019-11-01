export default function emailValidator(email: string, errorMsg: string = "Invalid Email Address"): string {
    if (!email.match(/.+\@.+\..+/)) {
        return errorMsg;
    }
    return "";
}
