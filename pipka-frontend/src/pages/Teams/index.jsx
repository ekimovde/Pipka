import React, { useState } from "react";

import { SearchOutlined, TeamOutlined, MoreOutlined } from "@ant-design/icons";
import { Teams as Friends } from "containers";

import "./Teams.scss";

const Teams = () => {
  const [inputValue, setValue] = useState("");

  return (
    <div className="sidebar__teams">
      <div className="sidebar__teams-top">
        <div className="sidebar__teams-header">
          <b>Friends</b>
        </div>
        <div className="sidebar__teams-input">
          <input
            type="text"
            placeholder="Поиск среди контактов..."
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="sidebar__teams-icon">
            <SearchOutlined />
          </div>
        </div>
        <div className="sidebar__teams-add">
          <p>Invite Friends</p>
          <div className="sidebar__teams-icon">
            <TeamOutlined />
          </div>
        </div>
      </div>

      <Friends value={inputValue} />
    </div>
  );
};

export default Teams;
