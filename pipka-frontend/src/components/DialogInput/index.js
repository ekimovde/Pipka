import React, { useState } from 'react';
// import { UploadField } from '@navjobs/upload';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';
import { Picker } from 'emoji-mart';

import './DialogInput.scss';

const ChatInput = (props) => {
  const [value, setValue] = useState('');
  const [emojiPickerVisible, setShowEmojiPicker] = useState('');

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible)
  }

  return (
    <div className="dialog__input">
      <div className="dialog__input-smile">
        {emojiPickerVisible &&
          <div className="dialog__input-emoji">
            <Picker />
          </div>
        }
        <SmileOutlined onClick={toggleEmojiPicker}/>
      </div>
      <input onChange={e => setValue(e.target.value)} type="text" placeholder="Введите текст сообщения…" />
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
  )
};

export default ChatInput;