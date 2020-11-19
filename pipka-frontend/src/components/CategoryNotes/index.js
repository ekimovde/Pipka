import React, { useState } from "react";
import classNames from "classnames";

import "./CategoryNotes.scss";

const CategoryNotes = () => {
  const categoryName = ["Yet to start", "Active", "Completed"];
  const [categoryIndex, setCategoryIndex] = useState(null);

  const onClickCategory = (index) => {
    setCategoryIndex(index);
  };

  return (
    <div className="notes__category">
      <ul className="notes__menu">
        <li
          className={classNames("notes__link", {
            active: categoryIndex === null,
          })}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {categoryName.map((name, index) => (
          <li
            className={classNames("notes__link", {
              active: categoryIndex === index,
            })}
            key={`${name}_${index}`}
            onClick={() => onClickCategory(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNotes;
