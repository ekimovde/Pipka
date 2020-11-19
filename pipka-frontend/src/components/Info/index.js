import React from "react";

import "./Info.scss";

const Info = ({ routes }) => {
  return (
    <div className="info">
      <div className="info__block">
        <div className="info__image">
          <img
            src="https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/12.jpg"
            alt=""
          />
        </div>
        <div className="info__text">
          <b>Hey, Matthew!</b>
          <span>Please select a chat to start messaging.</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
