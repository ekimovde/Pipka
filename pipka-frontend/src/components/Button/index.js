import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

const Button = (props) => {
  return (
    <button
      {...props}
      className={classNames("button", props.className, {
        disabled: props.disabled === true,
      })}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
