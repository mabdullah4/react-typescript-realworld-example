import * as React from "react";
import { Switch, Route, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import User from "../model/IUser";

import ArticleList from "../components/Article/ArticleList";
import UserHeader from "../components/UserHeader";

export interface ProfileProps {
    user: User;
}

const Profile: React.FunctionComponent<ProfileProps> = ({ user }) => {
    const match = useRouteMatch<{ path: string }>();
    let path = "/profile/:user/";
    if (match) path = match.path;

    return (
        <div className="profile-page">
            <UserHeader user={user} />

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to={`/profile/@${user.username}/personal`}>
                                        My Articles
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to={`/profile/@${user.username}/favorite`}>
                                        Favorite Articles
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Switch>
                            <Route component={ArticleList} path={`${path}personal`} />
                            <Route component={ArticleList} path={`${path}favorite`} />
                            <Route path={`${path}`}>
                                <Redirect to={`/profile/@${user.username}/personal`} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: { user: User }) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
