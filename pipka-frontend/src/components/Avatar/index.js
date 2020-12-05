import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { generateAvatarFromHash } from "utils/helpers";

import "./Avatar.scss";

const Avatar = ({ user, isNotes }) => {
  if (user.avatar === "true") {
    return (
      <img
        className={classNames({ "image--notes": isNotes })}
        src={user.avatar}
        alt=""
      />
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullName[0].toLowerCase();
    return (
      <div
        className={classNames("dialogs__item-avatar--symbol", {
          "image--notes": isNotes,
        })}
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.25%)`,
        }}
      >
        <p>{firstChar}</p>
      </div>
    );
  }
};

Avatar.propTypes = {
  user: PropTypes.object,
};

export default Avatar;
