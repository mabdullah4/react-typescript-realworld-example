export default function urlValidator(value: string, errorMsg: string = "Invalid URL") {
    if (!value.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/m)) {
        return errorMsg;
    }
    return "";
}
