import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";

import { socket } from "core";

const Messages = ({
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  user,
  isLoading,
  removeMessageById,
}) => {
  const messagesRef = useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);

    return () => socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
  }, [currentDialogId]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo(0, 99999);
    }
  }, [items]);

  return (
    <BaseMessages
      user={user}
      items={items}
      isLoading={isLoading}
      onRemoveMessage={removeMessageById}
      blockRef={messagesRef}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Messages);
