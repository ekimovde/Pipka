import React, { Fragment } from "react";
import PropTypes from "prop-types";

import checked from "assets/img/checked.svg";
import doneChecked from "assets/img/doneChecked.svg";

const IconReaded = ({ isMe, isReaded }) => (
  <Fragment>
    {isMe &&
      (isReaded ? (
        <div className="message__checked">
          <img src={checked} alt="Checked" />
        </div>
      ) : (
        isMe && (
          <div className="message__checked">
            <img src={doneChecked} alt="Checked" />
          </div>
        )
      ))}
  </Fragment>
);

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default IconReaded;
