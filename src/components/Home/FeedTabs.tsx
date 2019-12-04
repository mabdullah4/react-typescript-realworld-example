import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import IAuth from "../../model/IAuth";

export interface FeedTabsProps {
    auth: IAuth;
}

const FeedTabs: React.FunctionComponent<FeedTabsProps> = ({ auth }) => {
    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {auth.isLoggedIn && auth.user ? (
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to={`/@${auth.user.username}/feed`}>
                            Your Feed
                        </NavLink>
                    </li>
                ) : (
                    ""
                )}
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="">
                        Global Feed
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state: { auth: IAuth }) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(FeedTabs);
