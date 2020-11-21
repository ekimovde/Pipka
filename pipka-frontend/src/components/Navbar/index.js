import React from "react";
import { NavLink } from "react-router-dom";

import {
  UserOutlined,
  FileTextOutlined,
  MessageOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import logoSvg from "assets/img/logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbars">
      <div className="navbars__wrapper">
        <div className="navbars__top">
          <img src={logoSvg} alt="" />
        </div>

        <div className="navbars__bottom">
          <ul className="navbars__menu">
            <li className="navbars__link">
              <NavLink exact to="/teams" activeClassName="active">
                <TeamOutlined />
              </NavLink>
            </li>
            <li className="navbars__link">
              <NavLink exact to="/messenger" activeClassName="active">
                <MessageOutlined />
              </NavLink>
            </li>
            <li className="navbars__link">
              <NavLink to="/profile" activeClassName="active">
                <UserOutlined />
              </NavLink>
            </li>
            <li className="navbars__link">
              <NavLink to="/tasks" activeClassName="active">
                <FileTextOutlined />
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbars__footer">
          <div className="navbars__settings">
            <NavLink to="/settings" activeClassName="active">
              <SettingOutlined />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
