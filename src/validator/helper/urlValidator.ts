export default function urlValidator(value: string, errorMsg: string = "Invalid URL") {
    if (!value.match(/^(?:ht{2}ps?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'\\+,;=.]+$/)) {
        return errorMsg;
    }
    return "";
}
