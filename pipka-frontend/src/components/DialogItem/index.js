import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { IconReaded, Avatar, Time } from "../";

import "./DialogItem.scss";

const DialogItem = ({
  _id,
  isMe,
  onSelect,
  currentDialogId,
  author,
  partner,
  lastMessage,
}) => {
  return (
    <Link to={`/dialog/${_id}`}>
      <div
        className={classNames("dialogs__item", {
          "dialogs__item--online": lastMessage.user.isOnline,
          "dialogs__item--selected": currentDialogId === author._id,
        })}
        onClick={onSelect.bind(this, _id)}
      >
        <div className="dialogs__item-avatar">
          <Avatar user={lastMessage.user} />
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{partner && partner.fullName}</b>
            <span>
              <Time date={lastMessage.updatedAt} type="dialogItem-date" />
            </span>
          </div>
          <div className="dialogs__item-info-bottom">
            <p>{lastMessage.text}</p>
            {isMe && <IconReaded isMe={isMe} isReaded={false} />}
            {lastMessage.unreaded > 0 && (
              <div className="dialogs__item-info-count">
                {lastMessage.unreaded > 9 ? "+9" : lastMessage.unreaded}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

DialogItem.propTypes = {
  _id: PropTypes.string,
  author: PropTypes.object,
  lastMessage: PropTypes.object,
  created_at: PropTypes.string,
  isMe: PropTypes.bool,
  currentDialogId: PropTypes.oneOfType([null || PropTypes.string]),
  onSelect: PropTypes.func,
};

export default DialogItem;
