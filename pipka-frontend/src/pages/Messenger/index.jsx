import React, { useState } from "react";
import PropTypes from "prop-types";

import { Dialogs, Messages } from "containers";

import { FormOutlined, SearchOutlined } from "@ant-design/icons";
import { Modal, Select, Input, Button, Form } from "antd";

import "./Messenger.scss";

const { Option } = Select;
const { TextArea } = Input;

const Messenger = ({
  flag,
  user,
  users,
  messageText,
  visible,
  onShow,
  onClose,
  onModalOk,
  onChangeInput,
  selectedUserId,
  inputValues,
  onSearch,
  onSelectUser,
  isLoading,
  onChangeTextArea,
}) => {
  const [inputValue, setValue] = useState("");

  const options =
    users &&
    users.map((user) => <Option key={user._id}>{user.fullName}</Option>);

  return flag ? (
    <div className="sidebar__chat">
      <div className="sidebar__chat-top">
        <div className="sidebar__chat-header">
          <b>Chats</b>
          <div className="sidebar__chat-write">
            <FormOutlined onClick={onShow} />
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
        <Modal
          title="Создать диалог"
          visible={visible}
          onCancel={onClose}
          footer={[
            <Button key="back" onClick={onClose}>
              Закрыть
            </Button>,
            <Button
              disabled={!messageText}
              key="submit"
              type="primary"
              loading={isLoading}
              onClick={onModalOk}
            >
              Создать
            </Button>,
          ]}
        >
          <Form className="add-dialog-form">
            <Form.Item label="Введите имя или Email пользователя">
              <Select
                showSearch
                value={inputValues}
                placeholder="Введите имя или почту пользователя"
                style={{ width: "100%" }}
                onSearch={onSearch}
                onChange={onChangeInput}
                onSelect={onSelectUser}
                notFoundContent={null}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
              >
                {options}
              </Select>
            </Form.Item>

            {selectedUserId && (
              <Form.Item label="Введите текст сообщения">
                <TextArea
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  onChange={onChangeTextArea}
                  value={messageText}
                />
              </Form.Item>
            )}
          </Form>
        </Modal>
      </div>
      <Dialogs value={inputValue} userId={user && user._id} />
    </div>
  ) : (
    <Messages />
  );
};

Messenger.propTypes = {
  flag: PropTypes.bool,
};

export default Messenger;
