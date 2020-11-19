import React from "react";

import { PaperClipOutlined } from "@ant-design/icons";
import light from "assets/img/light-mode.png";
import dark from "assets/img/dark-mode.png";

import "./Layouts.scss";

const Layouts = () => {
  return (
    <div className="sidebar__layouts">
      <div className="sidebar__layouts-top">
        <div className="sidebar__layouts-header">
          <b>App Pages</b>
        </div>
      </div>

      <div className="sidebar__layouts-bottom">
        <div className="sidebar__layouts-card">
          <div className="sidebar__layouts-img">
            <img src={light} alt="" />
          </div>
          <div className="sidebar__layouts-text">
            <h5>Light mode</h5>
            <PaperClipOutlined />
          </div>
        </div>

        <div className="sidebar__layouts-card">
          <div className="sidebar__layouts-img">
            <img src={dark} alt="" />
          </div>
          <div className="sidebar__layouts-text">
            <h5>Dark mode</h5>
            <PaperClipOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
