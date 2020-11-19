import React from "react";

import { Notes } from "containers";
import { FormOutlined } from "@ant-design/icons";

import "./Tasks.scss";

const Tasks = ({ flag }) => {
  return flag ? (
    <div className="sidebar__tasks">
      <div className="sidebar__tasks-top">
        <div className="sidebar__tasks-header">
          <b>Tasks</b>
        </div>
      </div>

      <div className="sidebar__tasks-bottom">
        <div className="sidebar__tasks-group">
          <div className="sidebar__tasks-stretched">
            <div className="sidebar__tasks-icon">
              <FormOutlined />
            </div>
            <div className="sidebar__tasks-text">
              <p>
                You can create your own new task. You just need to click on me
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Notes />
  );
};

export default Tasks;
