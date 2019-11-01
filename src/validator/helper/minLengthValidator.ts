import { MIN_LENGTH } from "../../constant/constant";

export default function minLengthValidator(value: string, errorMsg: string, length: number = MIN_LENGTH): string {
    if (value.length < length) {
        return errorMsg;
    }
    return "";
}
