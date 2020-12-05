import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Status.scss";

const Status = ({ online, fullName }) => (
  <div className="dialog__info">
    <p className="dialog__name">{fullName}</p>
    <span
      className={classNames("dialog__status", {
        "dialog__status--online": online,
      })}
    >
      {online ? "онлайн" : "офлайн"}
    </span>
  </div>
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
