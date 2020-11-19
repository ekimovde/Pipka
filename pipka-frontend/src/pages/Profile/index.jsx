import React from "react";

import {
  PhoneOutlined,
  StarOutlined,
  SolutionOutlined,
  MailOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  ImportOutlined,
} from "@ant-design/icons";

import "./Profile.scss";

const Profile = () => {
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
            <img
              src="https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/12.jpg"
              alt=""
            />
          </div>
          <div className="sidebar__profile-text">
            <h5>Matthew Wiggins</h5>
            <p>
              Bootstrap is an open source toolkit for developing web with HTML.
            </p>
          </div>
        </div>

        <div className="sidebar__profile-form">
          <div className="sidebar__profile-info">
            <div className="sidebar__profile-offer">
              <span>Name</span>
              <p>Matthew</p>
            </div>
            <StarOutlined />
          </div>

          <div className="sidebar__profile-info">
            <div className="sidebar__profile-offer">
              <span>Surname</span>
              <p>Wiggins</p>
            </div>
            <SolutionOutlined />
          </div>

          <div className="sidebar__profile-info">
            <div className="sidebar__profile-offer">
              <span>Email</span>
              <p>anna@gmail.com</p>
            </div>
            <MailOutlined />
          </div>

          <div className="sidebar__profile-info">
            <div className="sidebar__profile-offer">
              <span>Phone</span>
              <p>+39 02 87 21 43 19</p>
            </div>
            <PhoneOutlined />
          </div>
        </div>

        <div className="sidebar__profile-status">
          <div className="sidebar__profile-block">
            <div className="sidebar__profile-verified">Verified</div>
            <div className="sidebar__profile-image">
              <img
                src="https://themes.2the.me/Messenger-1.1/demo-light/assets/images/avatars/12.jpg"
                alt=""
              />
            </div>
            <div className="sidebar_profile-descr">
              <h4>Sportsman</h4>
              <p>You're verified teacher, now open a new classroom.</p>
            </div>
          </div>
        </div>

        <div className="sidebar__profile-social">
          <div className="sidebar__profile-link">
            <p>Twitter</p>
            <TwitterOutlined />
          </div>

          <div className="sidebar__profile-link">
            <p>Facebook</p>
            <FacebookOutlined />
          </div>

          <div className="sidebar__profile-link">
            <p>Vkontakte</p>
            <InstagramOutlined />
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

export default Profile;
