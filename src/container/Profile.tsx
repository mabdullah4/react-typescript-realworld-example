import * as React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import IUser from "../model/IUser";

import ArticleList from "../components/Article/ArticleList";
import UserHeader from "../components/UserHeader";

export interface ProfileProps {
    user: IUser;
}

const Profile: React.SFC<ProfileProps> = ({ user }) => {
    const data = useRouteMatch<{ url: string }>();
    console.log(data);

    return (
        <div className="profile-page">
            <UserHeader user={user} />

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <Link className="nav-link active" to={`/profile/@${user.username}`}>
                                        My Articles
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`/profile/@${user.username}/favourite`}>
                                        Favorited Articles
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Switch>
                            <Route component={ArticleList} exact path={"/"} />
                            <Route component={ArticleList} path={`/:user/favourite`} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: { user: IUser }) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(Profile);
