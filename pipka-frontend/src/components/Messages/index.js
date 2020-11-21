import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";

import { Message, DialogInput, Info } from "components";
import { Status } from "components";

import { EllipsisOutlined } from "@ant-design/icons";

const Messages = ({ items, isLoading, blockRef }) => {
  return isLoading ? (
    <div className="dialog__loading">
      <Spin size="large" />
    </div>
  ) : items && !isLoading ? (
    items.length > 0 ? (
      <div className="dialog">
        <div className="dialog__top">
          <div />
          <div className="dialog__info">
            <p className="dialog__name">Гай Юлий Цезарь</p>
            <Status online />
          </div>

          <div className="dialog__menu">
            <EllipsisOutlined />
          </div>
        </div>
        <div className="dialog__bottom">
          <div className="dialog__bottom-overflow" ref={blockRef}>
            {items.map((item) => (
              <Message {...item} key={item._id} />
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
