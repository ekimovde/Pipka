import React from "react";
import classNames from "classnames";

import { validateField } from "utils/helpers";

const FormField = ({
  name,
  handleChange,
  handleBlur,
  errors,
  type,
  touched,
  values,
}) => {
  return (
    <div className="offer__block">
      <input
        id={name}
        className={classNames(
          "offer__input",
          validateField(name, errors, touched).class
        )}
        type={type}
        placeholder={`Enter you ${name}`}
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FormField;
