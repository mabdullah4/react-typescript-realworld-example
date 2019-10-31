import * as React from "react";
import { connect } from "react-redux";
import User from "../../model/User";
import { Link } from "react-router-dom";

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
                <Link className="nav-link disabled" to="">
                  Your Feed
                </Link>
              </li>
            );
          }
          return "";
        })()}
        <li className="nav-item">
          <Link className="nav-link active" to="">
            Global Feed
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(FeedTabs);
