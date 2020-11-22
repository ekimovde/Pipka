import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { FilterOutlined } from "@ant-design/icons";

import "./SortByNotes.scss";

const SortByNotes = React.memo(function SortByNotes({
  activeSortBy,
  onClickSortBy,
  sortByType,
}) {
  const [viewSortByMenu, setSortByMenu] = useState(false);
  const contextRef = useRef();

  const setVisibleMenu = () => {
    setSortByMenu(!viewSortByMenu);
  };

  const handleOutsideClick = (e) => {
    let path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(contextRef.current)) {
      setSortByMenu(false);
    }
  };

  const selectClickSort = (obj) => {
    setSortByMenu(false);
    onClickSortBy({ type: obj.type, order: obj.order });
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  });

  return (
    <div className="notes__sort" ref={contextRef}>
      <div className="notes__sort-icon" onClick={() => setVisibleMenu()}>
        <FilterOutlined />
        Sort by
      </div>
      {viewSortByMenu && (
        <div className="notes__context notes__context--sortBy">
          {sortByType.map((obj, index) => (
            <div className="notes__ctx" key={`${obj.type}_${index}`}>
              <div
                className={classNames("notes__item", {
                  active: activeSortBy === obj.type,
                })}
                onClick={() => selectClickSort(obj)}
              >
                {obj.icon}
                <p>{obj.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

SortByNotes.propTypes = {
  activeSortBy: PropTypes.string.isRequired,
  onClickSortBy: PropTypes.func.isRequired,
  sortByType: PropTypes.array.isRequired,
};

export default SortByNotes;
