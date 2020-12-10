import React from "react";
import PropTypes from "prop-types";

import { Notes } from "containers";
import { FormOutlined } from "@ant-design/icons";

import { Modal, Select, Input, Button, Form, DatePicker } from "antd";
import { format } from "date-fns";

import "./Tasks.scss";

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";

const Tasks = ({
  flag,
  user,
  users,
  visible,
  changeTask,
  selectedUserId,
  inputValues,
  taskText,
  taskName,
  isLoading,
  onClose,
  onShow,
  onChangeInput,
  onSelectUser,
  onSearch,
  setDate,
  onModalOk,
  setChangeTask,
  onChangeTextArea,
  onChangeTaskName,
}) => {
  const options =
    users &&
    users.map((user) => <Option key={user._id}>{user.fullName}</Option>);

  const onChangeData = (value, dateString) => {
    let dates = dateString;
    setDate({ dateStart: dates[0], dateEnd: dates[1] });

    setChangeTask(true);
  };

  return flag ? (
    <div className="sidebar__tasks">
      <div className="sidebar__tasks-top">
        <div className="sidebar__tasks-header">
          <b>Tasks</b>
        </div>
      </div>

      <div className="sidebar__tasks-bottom">
        <div className="sidebar__tasks-group" onClick={onShow}>
          <div className="sidebar__tasks-stretched">
            <div className="sidebar__tasks-icon">
              <FormOutlined />
            </div>
            <div className="sidebar__tasks-text">
              <p>
                You can create your own new task. You just need to click on me
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Создать задание"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={!changeTask}
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
              onChange={onChangeInput}
              onSearch={onSearch}
              onSelect={onSelectUser}
              placeholder="Введите имя или почту пользователя"
              style={{ width: "100%" }}
              notFoundContent={null}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
            >
              {options}
            </Select>
          </Form.Item>

          {selectedUserId && (
            <Form.Item label="Введите текст задания">
              <TextArea
                autoSize={{ minRows: 3, maxRows: 6 }}
                onChange={onChangeTextArea}
                value={taskText}
              />
            </Form.Item>
          )}

          {selectedUserId && (
            <Form.Item label="Введите название задания">
              <Input onChange={onChangeTaskName} value={taskName} />
            </Form.Item>
          )}

          {selectedUserId && (
            <Form.Item label="Укажите сроки выполнения задания">
              <RangePicker onChange={onChangeData} allowClear={false} />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  ) : (
    <Notes />
  );
};

Tasks.propTypes = {
  flag: PropTypes.bool,
};

export default Tasks;
