import User from "../model/IUser"
import emailValidator from "./helper/emailValidator"
import minLengthValidator from "./helper/minLengthValidator"
import { BIO_LENGTH } from "../constant/constant"
import urlValidator from "./helper/urlValidator"

const userValidator = (values: User) => {
    const errors: User = {
        bio: "",
        username: "",
        email: "",
        following: false,
        image: "",
        token: "",
    }

    errors.username = minLengthValidator(values.username, "Username must be have 8 characters minimum")
    errors.email = emailValidator(values.email || "")
    errors.bio = minLengthValidator(values.bio, "Bio must have atleast 25 Characters", BIO_LENGTH)
    errors.image = urlValidator(values.image, "Invalid Image url Provided")

    return errors
}

export default userValidator
