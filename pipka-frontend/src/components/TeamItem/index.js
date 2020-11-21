import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../";
import { MoreOutlined } from "@ant-design/icons";

import "./TeamItem.scss";

const TeamItem = ({ user, char }) => {
  return (
    <div className="sidebar__teams-block">
      <span>{char}</span>
      <div className="sidebar__teams-card">
        <div className="sidebar__teams-img">
          <Avatar user={user} />
        </div>
        <div className="sidebar__teams-info">
          <div className="sidebar__teams-text">
            <h5>{user.fullName}</h5>
            <p>Online</p>
          </div>
          <div className="sidebar__teams-btn">
            <MoreOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

TeamItem.propTypes = {
  user: PropTypes.object,
  char: PropTypes.string,
};

export default TeamItem;
