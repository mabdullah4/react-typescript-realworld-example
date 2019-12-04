import React from "react";
import { Route, Redirect } from "react-router-dom";

import IAuth from "./model/IAuth";
import { connect } from "react-redux";

export interface ProtectedRouteProps {
    auth: IAuth;
}

const ProtectedRoute: React.SFC<ProtectedRouteProps> = ({ auth, children }) => {
    return <Route render={() => (auth.isLoggedIn ? children : <Redirect to="/" />)} />;
};

const mapStateToProps = (state: { auth: IAuth }) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(ProtectedRoute);
