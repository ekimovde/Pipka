import React, { useState } from "react";
import { connect } from "react-redux";

import { Messenger } from "pages";
import { userApi, dialogsApi } from "utils/api";

const MessengerContainer = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [inputValues, setInputValues] = useState("");
  const [messageText, setMessageText] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const onClose = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  };

  const onSearch = (value) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onAddDialog = () => {
    setIsLoading(true);
    dialogsApi
      .create({
        partner: selectedUserId,
        text: messageText,
      })
      .then(onClose())
      .catch(setIsLoading(false));
  };

  const handleChangeInput = (value) => {
    setInputValues(value);
  };

  const onChangeTextArea = (e) => {
    setMessageText(e.target.value);
  };

  const onSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <Messenger
      flag={true}
      user={user}
      users={users}
      visible={visible}
      isLoading={isLoading}
      inputValues={inputValues}
      messageText={messageText}
      selectedUserId={selectedUserId}
      onChangeTextArea={onChangeTextArea}
      onClose={onClose}
      onShow={onShow}
      onChangeInput={handleChangeInput}
      onSearch={onSearch}
      onSelectUser={onSelectUser}
      onModalOk={onAddDialog}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(MessengerContainer);
