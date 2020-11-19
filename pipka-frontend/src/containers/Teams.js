import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Team } from "components";
import { dialogsActions } from "redux/actions";

const Teams = ({ fetchDialogs, value, items }) => {
  const filtred = Array.from(items);

  items = filtred.filter(
    (team) => team.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
  );

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    }
  }, []);

  return <Team items={items} />;
};

export default connect(
  ({ dialogs }) => ({
    dialogs,
    items: dialogs.items,
    currentDialogId: dialogs.currentDialogId,
  }),
  dialogsActions
)(Teams);
