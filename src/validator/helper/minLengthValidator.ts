import { MIN_LENGTH } from "../../constant/constant";

function minLengthValidator(value: string, errorMsg: string, length: number = MIN_LENGTH): string {
    return value.length <= length ? errorMsg : "";
}
export default minLengthValidator;
