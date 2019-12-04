import * as React from "react";
import { Link } from "react-router-dom";
import IUser from "../model/IUser";
import { connect } from "react-redux";
import IAuth from "../model/IAuth";

export interface HeaderProps {
    auth: IAuth;
}

function LoggedInMenu(user: IUser) {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/new-post">
                    <i className="ion-compose"></i>&nbsp;New Post
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/setting">
                    <i className="ion-gear-a"></i>&nbsp;Settings
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={`/profile/@${user.username}`}>
                    <i className="ion-person"></i>&nbsp;&nbsp;&nbsp;{user.username}
                </Link>
            </li>
        </>
    );
}

function LoggedOutMenu() {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    Sign In
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Sign up
                </Link>
            </li>
        </>
    );
}

const Header: React.FunctionComponent<HeaderProps> = ({ auth }) => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    conduit
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">
                            Home
                        </Link>
                    </li>
                    {auth.isLoggedIn && auth.user ? LoggedInMenu(auth.user) : <LoggedOutMenu />}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = (state: { auth: IAuth }) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
