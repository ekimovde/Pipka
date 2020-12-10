import React, { useState } from "react";
import { connect } from "react-redux";

import { Tasks } from "pages";

import { userApi, dialogsApi } from "utils/api";

const TasksContainer = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [taskText, setTaskText] = useState("");
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState([{ dateStart: "", dateEnd: "" }]);
  const [changeTask, setChangeTask] = useState(false);

  const onClose = () => {
    setVisible(false);
    setInputValues("");
    setTaskText("");
    setTaskName("");
    setSelectedUserId(null);
    setUsers([]);
    setChangeTask(false);
  };

  const onShow = () => {
    setVisible(true);
  };

  const handleChangeInput = (value) => {
    setInputValues(value);
  };

  const onChangeTextArea = (e) => {
    setTaskText(e.target.value);
  };

  const onChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const onSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  const onSearch = (value) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(setIsLoading(true));
  };

  const onAddTask = () => {
    setIsLoading(true);
    console.log(selectedUserId, taskText, taskName, date);
    onClose();
  };

  return (
    <Tasks
      flag={true}
      user={user}
      users={users}
      visible={visible}
      changeTask={changeTask}
      taskText={taskText}
      taskName={taskName}
      isLoading={isLoading}
      inputValues={inputValues}
      selectedUserId={selectedUserId}
      onShow={onShow}
      setDate={setDate}
      onClose={onClose}
      onSearch={onSearch}
      onModalOk={onAddTask}
      setChangeTask={setChangeTask}
      onSelectUser={onSelectUser}
      onChangeInput={handleChangeInput}
      onChangeTextArea={onChangeTextArea}
      onChangeTaskName={onChangeTaskName}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(TasksContainer);
