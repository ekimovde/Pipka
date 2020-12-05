import React, { useState } from "react";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Picker } from "emoji-mart";

import "./DialogInput.scss";

const DialogInput = (props) => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState("");
  const { onSendMessage, currentDialogId } = props;

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      onSendMessage(value, currentDialogId);
      setValue("");
    }
  };

  return (
    <div className="dialog__input">
      <div className="dialog__input-smile">
        {emojiPickerVisible && (
          <div className="dialog__input-emoji">
            <Picker />
          </div>
        )}
        <SmileOutlined onClick={toggleEmojiPicker} />
      </div>
      <input
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        type="text"
        placeholder="Введите текст сообщения…"
        value={value}
      />
      <div className="dialog__input-actions">
        {/* <UploadField
          onFiles={files => console.log(files)}
          containerProps={{
            className: 'photos'
          }}
          uploadProps={{
            accept: '.jpg,.png,.jpeg,.gif,.bmp',
            multiple: 'multiple'
          }}
        >
          <CameraOutlined />
        </UploadField> */}
        <CameraOutlined />
        {value ? <SendOutlined /> : <AudioOutlined />}
      </div>
    </div>
  );
};

export default DialogInput;
