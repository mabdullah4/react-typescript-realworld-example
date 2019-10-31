import * as React from "react";
import User from "../model/User";

export interface UserHeaderProps {
  user: User;
}

const UserHeader: React.SFC<UserHeaderProps> = ({ user }) => {
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={user.image} className="user-img" alt={user.username} />
            <h4>{user.username}</h4>
            <p>{user.bio}</p>
            <button className="btn btn-sm btn-outline-secondary action-btn">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {user.username}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
