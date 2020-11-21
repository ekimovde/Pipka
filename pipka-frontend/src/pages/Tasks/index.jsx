import React, { useState } from "react";
import PropTypes from "prop-types";

import { Notes } from "containers";
import { FormOutlined } from "@ant-design/icons";

import "./Tasks.scss";

const Tasks = ({ flag }) => {
  const [showModal, setShowModal] = useState(false);

  const onClickShowModal = () => {
    setShowModal(!showModal);
  };

  return flag ? (
    <div className="sidebar__tasks">
      <div className="sidebar__tasks-top">
        <div className="sidebar__tasks-header">
          <b>Tasks</b>
        </div>
      </div>

      <div className="sidebar__tasks-bottom">
        <div
          className="sidebar__tasks-group"
          onClick={() => onClickShowModal()}
        >
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

      {showModal && (
        <div className="notes__wrappers">
          <div className="notes__modal">
            <div className="notes__logo">
              <img src="" alt="" />
            </div>
            <div className="notes__info">
              <h2>Create an Note</h2>
              <FormOutlined />
            </div>
            <form className="notes__form">
              <div className="notes__group">
                <label>Title</label>
                <input type="text" placeholder="Type your title" />
              </div>

              <div className="notes__group">
                <label>Description</label>
                <textarea type="text" placeholder="Type your description" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Notes />
  );
};

Tasks.propTypes = {
  flag: PropTypes.bool,
};

export default Tasks;
