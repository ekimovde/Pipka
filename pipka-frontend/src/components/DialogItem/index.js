import React from 'react'
import classNames from 'classnames'
import format from 'date-fns/format'
import isToday from 'date-fns/istoday'

import { IconReaded, Avatar } from '../'

import './DialogItem.scss'

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm')
  } else {
    return format(created_at, 'dd.MM.yyyy')
  }
};

const DialogItem = ({ _id, user, unreaded, text, created_at, isMe, onSelect, currentDialogId }) => (
  <div className={classNames('dialogs__item', {
    'dialogs__item--online': user.isOnline,
    'dialogs__item--selected': currentDialogId === user._id
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullName}</b>
        <span>
          {/* <Time date={message.created_at} /> */}
          {getMessageTime(new Date(created_at))}
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {(unreaded > 0) && <div className="dialogs__item-info-count">
          {unreaded > 9 ? '+9': unreaded}
        </div>}
      </div>
    </div>
  </div>
)

export default DialogItem;