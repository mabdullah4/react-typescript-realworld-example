import INewPost from "../model/INewPost";
import minLengthValidator from "./helper/minLengthValidator";
import { ARTILCE_MIN_LENGTH } from "../constant/constant";

const postValidator = (values: INewPost) => {
    const errors: INewPost = { intro: "", text: "", title: "", tags: "" };

    errors.title = minLengthValidator(values.title, "Title must has 8 characters minimum");
    errors.intro = minLengthValidator(values.intro, "Article Intro must has 8 characters minimum");
    errors.text = minLengthValidator(values.text, "Article must has 25 characters minimum", ARTILCE_MIN_LENGTH);

    if (values.tags.length === 0) {
        errors.tags = "Must has atleast 1 tag attached";
    }

    return errors;
};

export default postValidator;
