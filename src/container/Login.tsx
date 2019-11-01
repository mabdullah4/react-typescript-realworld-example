import * as React from "react";
import { Link } from "react-router-dom";
import ErrorList from "../components/ErrorList";
import useForm from "../hook/useForm";
import loginValidator from "../validator/login";
import ILoginForm from "../model/ILoginForm";
import FormInput from "../components/other/FormInput";

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const {
    errors,
    handleBlur,
    handleSubmit,
    handleChange,
    isSubmitting
  } = useForm<ILoginForm>({ email: "", password: "" }, loginValidator);
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>
            <ErrorList errors={errors} />
            <form onSubmit={handleSubmit}>
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
              <button
                disabled={!isSubmitting}
                type="submit"
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
