import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import format from "date-fns/format";
import isToday from "date-fns/istoday";

const Time = ({ date, type }) => {
  if (type === "message-date") {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: ruLocale,
    });
  }
  if (type === "dialogItem-date") {
    date = new Date(date);
    if (isToday(date)) {
      return format(date, "HH:mm");
    } else {
      return format(date, "dd.MM.yyyy");
    }
  }
  if (type === "notesItem-date") {
    date = new Date(date);
    return format(date, "MMM dd, yy");
  }
};

Time.propTypes = {
  date: PropTypes.string,
  type: PropTypes.string,
};

export default Time;
