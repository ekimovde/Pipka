import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { IconReaded, Avatar, Time } from "../";

import "./DialogItem.scss";

const DialogItem = ({
  _id,
  user,
  unreaded,
  text,
  created_at,
  isMe,
  onSelect,
  currentDialogId,
}) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline,
        "dialogs__item--selected": currentDialogId === user._id,
      })}
      onClick={onSelect.bind(this, _id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullName}</b>
          <span>
            <Time date={created_at} type="dialogItem-date" />
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe && <IconReaded isMe={true} isReaded={false} />}
          {unreaded > 0 && (
            <div className="dialogs__item-info-count">
              {unreaded > 9 ? "+9" : unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

DialogItem.propTypes = {
  _id: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  created_at: PropTypes.string,
  isMe: PropTypes.bool,
  currentDialogId: PropTypes.oneOfType([null || PropTypes.string]),
  onSelect: PropTypes.func,
};

export default DialogItem;
