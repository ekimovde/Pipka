import React from "react";
import orderBy from "lodash/orderBy";
import classNames from "classnames";
import PropTypes from "prop-types";

import { DialogItem } from "../";

import { Empty, Spin } from "antd";

import "./Dialogs.scss";

const Dialogs = ({
  items,
  userId,
  onSelectDialog,
  isLoading,
  blockRef,
  currentDialogId,
}) => (
  <div className="sidebar__chat-bottom" ref={blockRef}>
    <div
      className={classNames("dialogs", {
        "dialogs--loading": isLoading,
      })}
    >
      {isLoading ? (
        <Spin size="large" />
      ) : items.length && !isLoading ? (
        orderBy(items, ["created_at"], ["desc"]).map((item) => (
          <DialogItem
            key={item._id}
            {...item}
            isMe={item.user._id === userId}
            onSelect={onSelectDialog}
            currentDialogId={currentDialogId}
          />
        ))
      ) : (
        !isLoading &&
        !items.length && (
          <div className="dialogs__empty">
            <Empty description="Ничего не найдено" />
          </div>
        )
      )}
    </div>
  </div>
);

export default Dialogs;
