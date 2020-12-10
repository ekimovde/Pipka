import React from "react";
import { Route } from "react-router-dom";

import { Profile, Teams } from "pages";
import { Messenger, Tasks } from "containers";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <Route exact path="/teams" component={Teams} />
        <Route
          exact
          path={["/messenger", "/dialog/:id"]}
          render={(props) => <Messenger flag={true} {...props} />}
        />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/tasks"
          render={(props) => <Tasks flag={true} {...props} />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
