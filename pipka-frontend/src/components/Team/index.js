import React from "react";
import orderBy from "lodash/orderBy";

import { TeamItem } from "components";

import "./Team.scss";

const Team = ({ items }) => {
  let char = "";
  let outChar;

  return (
    <div className="sidebar__teams-bottom">
      {orderBy(items, ["user.fullName"], ["asc"]).map((item) => {
        if (item.user.fullName[0] !== char) {
          char = item.user.fullName[0];
          outChar = char;
        } else {
          outChar = "";
        }
        return <TeamItem key={item._id} {...item} char={outChar} />;
      })}
      <div className="sidebar__teams-none"></div>
    </div>
  );
};

export default Team;
