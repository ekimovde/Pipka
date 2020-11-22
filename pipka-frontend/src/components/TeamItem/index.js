import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { Avatar } from "../";
import { MoreOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./TeamItem.scss";

const TeamItem = ({ user, char }) => {
  const [showMenu, setShowMenu] = useState(false);
  const contextRef = useRef();

  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleOutsideClick = (e) => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(contextRef.current)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

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
            <MoreOutlined onClick={() => onClickMenu()} ref={contextRef} />
            {showMenu && (
              <div className="notes__context notes__context-teams">
                <div className="notes__ctx">
                  <div className="notes__item">
                    <EditOutlined />
                    <p>New chat</p>
                  </div>
                </div>
                <div className="notes__ctx">
                  <div className="notes__item notes__item-red">
                    <DeleteOutlined />
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            )}
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
