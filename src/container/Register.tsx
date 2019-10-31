import * as React from "react";
import { Link } from "react-router-dom";
import ErrorList from "../components/ErrorList";
import useForm from "../hook/useForm";
import registerValidator from "../validator/register";
import IRegisterForm from "../model/IRegisterForm";

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
  const {errors,handleBlur,handleChange,handleSubmit,isSubmitting} = useForm<IRegisterForm>({email:"",password:"",username:""},registerValidator)
  
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>
            <ErrorList errors={errors} />
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control form-control-lg"
                  type="text"
                  name="username"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control form-control-lg"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </fieldset>
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

export default Register;
