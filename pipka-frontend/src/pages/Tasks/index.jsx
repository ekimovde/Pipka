import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Notes } from "containers";
import { FormOutlined, CheckOutlined, ReadOutlined } from "@ant-design/icons";
import logoSvg from "assets/img/logo.svg";

import "./Tasks.scss";

const color = ["red", "orange", "yellow", "green", "blue", "violet"];

const Tasks = ({ flag }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeColor, setActiveColor] = useState("");

  const onClickShowModal = () => {
    setShowModal(!showModal);
  };
  const onClickActiveColor = (color) => {
    setActiveColor(color);
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
              <img src={logoSvg} alt="" />
            </div>
            <div className="notes__info">
              <h2>Create an Note</h2>
              <ReadOutlined />
            </div>
            <form className="notes__form">
              <div className="notes__forms">
                <div className="notes__group">
                  <label>Title</label>
                  <input type="text" placeholder="Type your title" />
                </div>

                <div className="notes__group">
                  <label>Description</label>
                  <textarea type="text" placeholder="Type your description" />
                </div>

                <div className="notes__group notes__group-color">
                  <label>Color</label>
                  <ul className="notes__menu">
                    {color.map((color, index) => (
                      <li
                        className={classNames(`notes__item ${color}`, {
                          active: activeColor === color,
                        })}
                        key={index}
                        onClick={() => onClickActiveColor(color)}
                      >
                        <div className={classNames(`notes__color ${color}`)}>
                          <CheckOutlined />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="notes__group">
                  <label>Date start</label>
                  <input
                    type="date"
                    placeholder="Type your title"
                    className="notes__date"
                  />
                </div>

                <div className="notes__group">
                  <label>Date end</label>
                  <input
                    type="date"
                    placeholder="Type your title"
                    className="notes__date"
                  />
                </div>
              </div>

              <div className="notes__buttons">
                <button
                  className="notes__btn notes__btn-cancel"
                  onClick={() => onClickShowModal()}
                >
                  Cancel
                </button>
                <button className="notes__btn">Create</button>
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
