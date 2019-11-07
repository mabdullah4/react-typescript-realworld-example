import * as React from "react";
import FormInput from "../components/other/FormInput";
import useForm from "../hook/useForm";
import User from "../model/IUser";
import { connect } from "react-redux";
import userValidator from "../validator/user";
import FormTextArea from "../components/other/FormTextArea";
import ErrorList from "../components/ErrorList";

export interface SettingProps {
    user: User;
}

const Setting: React.FunctionComponent<SettingProps> = ({ user }) => {
    const { errors, handleSubmit, handleBlur, handleChange, isSubmitting } = useForm<User>(user, userValidator);

    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>
                        <ErrorList errors={errors} />
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                type="url"
                                value={user.image}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="image"
                                placeholder="URL of profile picture"
                            />
                            <FormInput
                                value={user.username}
                                type="text"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="username"
                                classes="form-control-lg"
                                placeholder="Your Name"
                            />
                            <FormTextArea
                                value={user.bio}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="bio"
                                classes="form-control-lg"
                                placeholder="Short bio about you"
                            />
                            <FormInput
                                value={user.email}
                                type="email"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="email"
                                classes="form-control-lg"
                                placeholder="Email"
                            />
                            <FormInput
                                type="password"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="password"
                                classes="form-control-lg"
                                placeholder="Password"
                            />
                            <button disabled={!isSubmitting} className="btn btn-lg btn-primary pull-xs-right">
                                Update Settings
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: { user: User }) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Setting);
