import React from "react";

import { Switch } from "antd";
import {
  UserOutlined,
  PictureOutlined,
  BellOutlined,
  SafetyCertificateOutlined,
  ShareAltOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  CodepenOutlined,
} from "@ant-design/icons";

import "./Settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__top">
        <div className="settings__offer">
          <b>Settings</b>
          <p>Update your profile details</p>
        </div>
      </div>

      <div className="settings__bottom">
        <div className="settings__offer">
          <div className="settings__block-one">
            <div className="settings__account">
              <div className="settings__account-header">
                <div className="settings__account-offer">
                  <b>Account</b>
                  <p>Update your profile details.</p>
                </div>
                <UserOutlined />
              </div>

              <form className="settings__account-form">
                <div className="settings__account-group">
                  <label>Avatar</label>
                  <div className="settings__account-stretched">
                    <div className="settings__account-icon">
                      <PictureOutlined />
                    </div>
                    <div className="settings__account-text">
                      <p>You can upload jpg, gif or png files.</p>
                      <p>Max file size 3mb.</p>
                    </div>
                  </div>
                </div>

                <div className="settings__account-group">
                  <label>Name</label>
                  <input type="text" placeholder="Type your name" />
                </div>

                <div className="settings__account-group">
                  <label>Middle Name</label>
                  <input type="text" placeholder="Type your middle name" />
                </div>

                <div className="settings__account-group">
                  <label>Surname</label>
                  <input type="text" placeholder="Type your surname" />
                </div>

                <div className="settings__account-group">
                  <label>Phone</label>
                  <input type="text" placeholder="(123) 456-7890" />
                </div>

                <div className="settings__account-group">
                  <label>Email</label>
                  <input type="text" placeholder="you@yoursite.com" />
                </div>

                <button className="settings__account-btn btn">
                  Save Preferences
                </button>
              </form>
            </div>

            <div className="settings__notifications">
              <div className="settings__notifications-header">
                <div className="settings__notifications-offer">
                  <b>Notifications</b>
                  <p>Update your profile details.</p>
                </div>
                <BellOutlined />
              </div>

              <div className="settings__notifications-block">
                <div className="settings__notifications-group">
                  <div className="settings__notifications-text">
                    <b>Sound</b>
                    <p>Update your profile details.</p>
                  </div>
                  <Switch size="small" defaultChecked />
                </div>
                <div className="settings__notifications-group">
                  <div className="settings__notifications-text">
                    <b>Exceptions</b>
                    <p>Update your profile details.</p>
                  </div>
                  <Switch size="small" defaultChecked />
                </div>
                <div className="settings__notifications-group">
                  <div className="settings__notifications-text">
                    <b>Message preview</b>
                    <p>Update your profile details.</p>
                  </div>
                  <Switch size="small" defaultChecked />
                </div>
                <div className="settings__notifications-group">
                  <div className="settings__notifications-text">
                    <b>Show notifications</b>
                    <p>Update your profile details.</p>
                  </div>
                  <Switch size="small" defaultChecked />
                </div>
              </div>
            </div>

            <div className="settings__none"></div>
          </div>

          <div className="settings__block-two">
            <div className="settings__security">
              <div className="settings__security-header">
                <div className="settings__security-offer">
                  <b>Security</b>
                  <p>Update your profile details.</p>
                </div>
                <SafetyCertificateOutlined />
              </div>

              <form className="settings__account-form">
                <div className="settings__account-group">
                  <label>Name</label>
                  <input type="text" placeholder="Type your name" />
                </div>

                <div className="settings__account-group">
                  <label>Current password</label>
                  <input type="password" placeholder="Current password" />
                </div>

                <div className="settings__account-group">
                  <label>New password</label>
                  <input type="password" placeholder="New password" />
                </div>

                <div className="settings__account-group">
                  <label>Verify password</label>
                  <input type="password" placeholder="Verify password" />
                </div>

                <button className="settings__account-btn btn">
                  Change Password
                </button>
              </form>
            </div>

            <div className="settings__social">
              <div className="settings__social-header">
                <div className="settings__social-offer">
                  <b>Social</b>
                  <p>Update your profile details.</p>
                </div>
                <ShareAltOutlined />
              </div>

              <form className="settings__social-form">
                <div className="settings__social-group">
                  <label>Twitter</label>
                  <div className="settings__social-input">
                    <div className="settings__social-icon">
                      <TwitterOutlined />
                    </div>
                    <input type="text" placeholder="Type your name" />
                  </div>
                </div>

                <div className="settings__social-group">
                  <label>Facebook</label>
                  <div className="settings__social-input">
                    <div className="settings__social-icon">
                      <FacebookOutlined />
                    </div>
                    <input type="password" placeholder="Facebook" />
                  </div>
                </div>

                <div className="settings__social-group">
                  <label>Instagram</label>
                  <div className="settings__social-input">
                    <div className="settings__social-icon">
                      <InstagramOutlined />
                    </div>
                    <input type="password" placeholder="Instagram" />
                  </div>
                </div>

                <div className="settings__social-group">
                  <label>Vkontakte</label>
                  <div className="settings__social-input">
                    <div className="settings__social-icon">
                      <CodepenOutlined />
                    </div>
                    <input type="password" placeholder="Vkontakte" />
                  </div>
                </div>

                <button className="settings__social-btn btn">
                  Save Preferences
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
