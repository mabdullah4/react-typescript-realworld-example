import INewPost from "../model/INewPost";
import minLengthValidator from "./helper/minLengthValidator";
import { ARTICLE_MIN_LENGTH } from "../constant/constant";

const postValidator = (values: INewPost) => {
    const errors: INewPost = { intro: "", text: "", title: "", tag: "" };

    errors.title = minLengthValidator(values.title, "Title must has 8 characters minimum");
    errors.intro = minLengthValidator(values.intro, "Article Intro must has 8 characters minimum");
    errors.text = minLengthValidator(values.text, "Article must has 25 characters minimum", ARTICLE_MIN_LENGTH);
    errors.tag = minLengthValidator(values.text, "Tags are required", 1);

    return errors;
};

export default postValidator;
