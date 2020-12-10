import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";

import { Message } from "components";
import { DialogInput, Status, Info } from "containers";

import "./Messages.scss";

const Messages = ({
  items,
  isLoading,
  blockRef,
  user,
  onRemoveMessage,
  currentDialogId,
}) => {
  return isLoading ? (
    <div className="dialog__loading">
      <Spin size="large" />
    </div>
  ) : items && !isLoading && items.length > 0 ? (
    <div className="dialog">
      <div className="dialog__top">
        <Status online />
      </div>
      <div className="dialog__bottom">
        <div className="dialog__bottom-overflow" ref={blockRef}>
          {items.map((item) => (
            <Message
              {...item}
              key={item._id}
              isMe={user && user._id === item.user._id}
              onRemoveMessage={onRemoveMessage.bind(this, item._id)}
            />
          ))}
        </div>
        <DialogInput />
      </div>
    </div>
  ) : (
    (currentDialogId !== null && items.length < 1 && !isLoading && (
      <div className="dialog">
        <div className="dialog__bottom">
          <div className="dialog__empty">
            <Empty description="Диалог пуст" />
          </div>
          <DialogInput />
        </div>
      </div>
    )) || (
      <div className="dialog__empty">
        <Info />
      </div>
    )
  );
};

Messages.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Messages;
