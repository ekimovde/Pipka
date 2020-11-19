import React from "react";

import { NotesItem, CategoryNotes } from "components";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import "./Notes.scss";

const Notes = ({ items }) => {
  return (
    <div className="notes">
      <div className="notes__top">
        <div className="notes__text">
          <b>Notes</b>
          <p>Update your notes details</p>
        </div>
        <CategoryNotes />
      </div>

      <div className="notes__bottom">
        <div className="notes__wrapper">
          {items.map((item) => (
            <NotesItem key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
