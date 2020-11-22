import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { NotesItem, CategoryNotes, SortByNotes } from "components";
import { filtersActions } from "redux/actions";
import { notesActions } from "redux/actions";

import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";

import "./Notes.scss";

const categoryName = ["Yet to start", "Active", "Completed"];
const sortByItems = [
  {
    name: "Title",
    type: "title",
    icon: <SortAscendingOutlined />,
    order: "asc",
  },
  {
    name: "Title",
    type: "title",
    icon: <SortDescendingOutlined />,
    order: "desc",
  },
];

const Notes = ({ items }) => {
  const dispatch = useDispatch();
  const { categoryNotes, sortByNotes } = useSelector(({ filters }) => filters);

  const onClickCategory = (name) => {
    dispatch(filtersActions.categoryNotes(name));
  };
  const onClickSortBy = (type) => {
    dispatch(filtersActions.sortByNotes(type));
  };

  useEffect(() => {
    dispatch(notesActions.fetchNotes(categoryNotes, sortByNotes));
  }, [categoryNotes, sortByNotes]);

  return (
    <div className="notes">
      <div className="notes__top">
        <div className="notes__text">
          <b>Notes</b>
          <p>Update your notes details</p>
        </div>
        <CategoryNotes
          activeCategory={categoryNotes}
          onClickCategory={onClickCategory}
          categoryName={categoryName}
        />
        <SortByNotes
          activeSortBy={sortByNotes.type}
          onClickSortBy={onClickSortBy}
          sortByType={sortByItems}
        />
      </div>

      <div className="notes__bottom">
        <div className="notes__wrapper">
          {items && items.map((item) => <NotesItem key={item._id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

Notes.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Notes;
