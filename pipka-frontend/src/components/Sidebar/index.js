import React from "react";
import { Route } from "react-router-dom";

import { Profile, Messenger, Teams, Tasks, Layouts } from "pages";

import "./Sidebar.scss";

const Sidebar = ({}) => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <Route exact path="/teams" component={Teams} />
        <Route
          exact
          path="/messenger"
          render={(props) => <Messenger flag={true} {...props} />}
        />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/tasks"
          render={(props) => <Tasks flag={true} {...props} />}
        />
        <Route exact path="/settings" component={Layouts} />
      </div>
    </div>
  );
};

export default Sidebar;
