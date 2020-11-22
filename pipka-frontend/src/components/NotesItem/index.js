import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { Avatar, Time } from "components";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "./NotesItem.scss";

const NotesItem = ({
  statusNotes,
  title,
  descr,
  date_start,
  date_end,
  user,
}) => {
  const [viewContextMenu, setContextMenu] = useState(false);
  const contextRef = useRef();

  const onClickContextMenu = () => {
    setContextMenu(!viewContextMenu);
  };

  const handleOutsideClick = (e) => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(contextRef.current)) {
      setContextMenu(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

  return (
    <div className="notes__block">
      <div
        className={classNames("notes__header", {
          "status--noActive": statusNotes === "Yet to start",
          "status--active": statusNotes === "Active",
          "status--completed": statusNotes === "Completed",
        })}
      >
        <div className="notes__circle"></div>
        <span className="notes__tag">{statusNotes}</span>
      </div>

      <div className="notes__offer">
        <h5 className="notes__title">{title}</h5>
        <p className="notes__descr">{descr}</p>
      </div>

      <div className="notes__footer">
        <div className="notes__img">
          <Avatar user={user} isNotes />
        </div>

        <div className="notes__info">
          <b className="notes__name">{user.fullName}</b>
          <span className="notes__date">
            <Time date={date_start} type="notesItem-date" /> -{" "}
            <Time date={date_end} type="notesItem-date" />
          </span>
        </div>

        <div className="notes__icon">
          <EllipsisOutlined
            onClick={() => onClickContextMenu()}
            ref={contextRef}
          />

          {viewContextMenu && (
            <div className="notes__context">
              <div className="notes__ctx">
                <div className="notes__item">
                  <EditOutlined />
                  <p>Edit</p>
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
  );
};

export default NotesItem;
