import React, { useEffect } from "react";
import { connect } from "react-redux";

import { notesActions } from "redux/actions";
import { Notes as BaseNotes } from "components";

const Notes = ({ items, fetchNotes, categoryNotes, sortByNotes }) => {
  useEffect(() => {
    if (!items.length) {
      fetchNotes(categoryNotes, sortByNotes);
    }
  }, []);

  return <BaseNotes items={items} />;
};

export default connect(
  ({ notes, filters }) => ({
    notes,
    items: notes.items,
    categoryNotes: filters.categoryNotes,
    sortByNotes: filters.sortByNotes,
  }),
  notesActions
)(Notes);
