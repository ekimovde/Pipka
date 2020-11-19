import React, { useState } from "react";

import { Status } from "components";
import { Dialogs, Messages } from "containers";

import { FormOutlined, SearchOutlined } from "@ant-design/icons";

import "./Messenger.scss";

const Messenger = ({ flag }) => {
  const [inputValue, setValue] = useState("");

  return flag ? (
    <div className="sidebar__chat">
      <div className="sidebar__chat-top">
        <div className="sidebar__chat-header">
          <b>Chats</b>
          <div className="sidebar__chat-write">
            <FormOutlined />
          </div>
        </div>
        <div className="sidebar__chat-input">
          <input
            type="text"
            placeholder="Поиск среди контактов..."
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="sidebar__chat-icon">
            <SearchOutlined />
          </div>
        </div>
      </div>
      <Dialogs value={inputValue} userId={0} />
    </div>
  ) : (
    <Messages />
  );
};

export default Messenger;
