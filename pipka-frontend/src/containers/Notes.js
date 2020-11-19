import React, { useEffect } from "react";
import { connect } from "react-redux";

import { notesActions } from "redux/actions";
import { Notes as BaseNotes } from "components";

const Notes = ({ items, fetchNotes }) => {
  useEffect(() => {
    if (!items.length) {
      fetchNotes();
    }
  }, []);

  return <BaseNotes items={items} />;
};

export default connect(
  ({ notes }) => ({
    notes,
    items: notes.items,
  }),
  notesActions
)(Notes);
