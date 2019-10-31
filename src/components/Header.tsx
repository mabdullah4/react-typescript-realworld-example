import * as React from "react";
import { Link } from "react-router-dom";
import User from "../model/User";
import { connect } from "react-redux";

export interface HeaderProps {
  user: User;
}

function LoggedInMenu(user: User) {
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

const Header: React.FunctionComponent<HeaderProps> = ({ user }) => {
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
          {(() => {
            if (user.token) {
              return LoggedInMenu(user);
            }
            return <LoggedOutMenu />;
          })()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);
