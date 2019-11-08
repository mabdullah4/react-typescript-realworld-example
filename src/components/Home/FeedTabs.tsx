import * as React from "react";
import { connect } from "react-redux";
import User from "../../model/IUser";
import { NavLink } from "react-router-dom";

export interface FeedTabsProps {
    user: User;
}

const FeedTabs: React.FunctionComponent<FeedTabsProps> = ({ user }) => {
    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {(() => {
                    if (user.token) {
                        return (
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to={`/@${user.username}/feed`}>
                                    Your Feed
                                </NavLink>
                            </li>
                        );
                    }
                    return "";
                })()}
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="">
                        Global Feed
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state: { user: User }) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(FeedTabs);
