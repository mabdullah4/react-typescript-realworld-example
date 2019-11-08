import * as React from "react";
import FormInput from "../components/other/FormInput";
import useForm from "../hook/useForm";
import INewPost from "../model/INewPost";
import postValidator from "../validator/post";
import ErrorList from "../components/ErrorList";
import FormTextArea from "../components/other/FormTextArea";

export interface NewPostProps {}

const NewPost: React.FunctionComponent<NewPostProps> = () => {
    const { errors, handleChange, handleSubmit, handleBlur, isSubmitting } = useForm<INewPost>(
        { intro: "", text: "", title: "", tag: "" },
        postValidator
    );

    return (
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <ErrorList errors={errors} />
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <FormInput
                                    name="title"
                                    placeholder="Article Title"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    classes="form-control-lg"
                                />
                                <FormInput
                                    name="intro"
                                    placeholder="What's this article about?"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <FormTextArea
                                    name="text"
                                    placeholder="Write your article (in markdown)"
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                />
                                <FormInput name="tag" placeholder="Enter tags" handleChange={handleChange} handleBlur={handleBlur} />
                                <button className="btn btn-lg pull-xs-right btn-primary" type="submit" disabled={!isSubmitting}>
                                    Publish Article
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPost;
