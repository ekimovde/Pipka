import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";

import { Message, Info } from "components";
import { DialogInput, Status } from "containers";

import { EllipsisOutlined } from "@ant-design/icons";

const Messages = ({ items, isLoading, blockRef, user, onRemoveMessage }) => {
  return isLoading ? (
    <div className="dialog__loading">
      <Spin size="large" />
    </div>
  ) : items && !isLoading ? (
    items.length > 0 ? (
      <div className="dialog">
        <div className="dialog__top">
          <div />
          <Status online />

          <div className="dialog__menu">
            <EllipsisOutlined />
          </div>
        </div>
        <div className="dialog__bottom">
          <div className="dialog__bottom-overflow" ref={blockRef}>
            {items.map((item) => (
              <Message
                {...item}
                key={item._id}
                isMe={user._id === item.user._id}
                onRemoveMessage={onRemoveMessage.bind(this, item._id)}
              />
            ))}
          </div>
          <DialogInput />
        </div>
      </div>
    ) : (
      <div className="dialog">
        <div className="dialog__bottom">
          <div className="dialog__empty">
            <Empty description="Диалог пуст" />
          </div>
          <DialogInput />
        </div>
      </div>
    )
  ) : (
    <div className="dialog__empty">
      <Info />
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Messages;
