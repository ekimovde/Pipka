import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import "./CategoryNotes.scss";

const CategoryNotes = React.memo(function CategoryNotes({
  activeCategory,
  onClickCategory,
  categoryName,
}) {
  return (
    <div className="notes__category">
      <ul className="notes__menu">
        <li
          className={classNames("notes__link", {
            active: activeCategory === null,
          })}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {categoryName.map((name, index) => (
          <li
            className={classNames("notes__link", {
              active: activeCategory === name,
            })}
            key={`${name}_${index}`}
            onClick={() => onClickCategory(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

CategoryNotes.propTypes = {
  activeCategory: PropTypes.oneOfType([null || PropTypes.string]),
  categoryName: PropTypes.array.isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

export default CategoryNotes;
