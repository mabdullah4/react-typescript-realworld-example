import * as React from "react";
import { Link } from "react-router-dom";
import ErrorList from "../components/ErrorList";
import useForm from "../hook/useForm";
import registerValidator from "../validator/register";
import IRegisterForm from "../model/IRegisterForm";
import FormInput from "../components/other/FormInput";

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
    const { errors, handleBlur, handleChange, handleSubmit, isSubmitting } = useForm<IRegisterForm>(
        { email: "", password: "", username: "" },
        registerValidator
    );

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign Up</h1>
                        <p className="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>
                        <ErrorList errors={errors} />
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                name="username"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                placeholder="Username"
                                classes="form-control-lg"
                            />
                            <FormInput
                                name="email"
                                type="email"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                placeholder="Email"
                                classes="form-control-lg"
                            />
                            <FormInput
                                type="password"
                                name="password"
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                placeholder="Password"
                                classes="form-control-lg"
                            />
                            <button disabled={!isSubmitting} type="submit" className="btn btn-lg btn-primary pull-xs-right">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
