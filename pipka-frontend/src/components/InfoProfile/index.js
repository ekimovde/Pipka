import React from "react";

import { StarOutlined, MailOutlined, ImportOutlined } from "@ant-design/icons";
import { Tag } from "antd";

import { Avatar } from "components";

import "./Profile.scss";

const InfoProfile = ({ user }) => {
  return (
    <div className="sidebar__profile">
      <div className="sidebar__profile-top">
        <div className="sidebar__profile-header">
          <b>Profile</b>
        </div>
      </div>

      <div className="sidebar__profile-bottom">
        <div className="sidebar__profile-card">
          <div className="sidebar__profile-img">
            {user && <Avatar user={user} />}
          </div>
          <div className="sidebar__profile-text">
            <h5>{user && user.fullName}</h5>
            <p>
              {user && user.isOnline ? (
                <Tag color="green">Спортсмен</Tag>
              ) : (
                <Tag color="purple">Тренер</Tag>
              )}
            </p>
          </div>
        </div>

        <div className="sidebar__profile-form">
          <div className="sidebar__profile-info">
            <div className="sidebar__profile-offer">
              <span>FullName</span>
              <p>{user && user.fullName}</p>
            </div>
            <StarOutlined />
          </div>

          <div className="sidebar__profile-info">
            <div className="sidebar__profile-offer">
              <span>Email</span>
              <p>{user && user.email}</p>
            </div>
            <MailOutlined />
          </div>
        </div>

        <div className="sidebar__profile-buttons">
          <button className="sidebar__profile-logout">Logout</button>
          <div className="sidebar__profile-icons">
            <ImportOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
