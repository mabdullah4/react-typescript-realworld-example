import * as React from "react";
import { connect } from "react-redux";
import User from "../../model/User";

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
                <a className="nav-link disabled" href="">
                  Your Feed
                </a>
              </li>
            );
          }
          return "";
        })()}
        <li className="nav-item">
          <a className="nav-link active" href="">
            Global Feed
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(FeedTabs);
