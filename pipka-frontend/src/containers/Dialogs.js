import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "redux/actions";
import { Dialogs as BaseDialogs } from "components";

import { socket } from "core";

const Dialogs = ({
  fetchDialogs,
  currentDialogId,
  setCurrentDialogId,
  isLoading,
  items,
  userId,
  value,
}) => {
  const dialogsRef = useRef(null);
  const filtred = Array.from(items);

  items = filtred.filter(
    (dialog) =>
      dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
  );

  const onNewDialog = () => {
    fetchDialogs();
  };

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    }

    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
  }, [isLoading, fetchDialogs]);

  useEffect(() => {
    if (dialogsRef.current) {
      dialogsRef.current.scrollBy(0, -12212);
    }
  }, [items]);

  return (
    <BaseDialogs
      items={items}
      userId={userId}
      onSelectDialog={setCurrentDialogId}
      isLoading={isLoading}
      blockRef={dialogsRef}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(
  ({ dialogs }) => ({
    dialogs,
    isLoading: dialogs.isLoading,
    items: dialogs.items,
    currentDialogId: dialogs.currentDialogId,
  }),
  dialogsActions
)(Dialogs);
