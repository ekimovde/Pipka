import React from "react";

import { Avatar } from "components";

import "./Info.scss";

const Info = ({ user }) => {
  return (
    <div className="info">
      <div className="info__block">
        <div className="info__image">{user && <Avatar user={user} />}</div>
        <div className="info__text">
          <b>Hey, {user && user.fullName}!</b>
          <span>Please select a chat to start messaging.</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
