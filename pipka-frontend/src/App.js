import React from "react";
import { Route } from "react-router-dom";

import { Auth, Messenger, Tasks, Settings } from "pages";
import { Navbar, Sidebar, Info } from "components";

function App() {
  return (
    <div className="app">
      <Route
        exact
        path={["/teams", "/messenger", "/profile", "/settings", "/tasks"]}
        component={Navbar}
      />
      <Route
        exact
        path={["/teams", "/messenger", "/profile", "/settings", "/tasks"]}
        component={Sidebar}
      />

      <div className="main">
        <Route
          exact
          path={["/", "/login", "/register", "/reset"]}
          component={Auth}
        />
        <Route exact path={"/messenger"} component={Messenger} />
        <Route exact path={"/tasks"} component={Tasks} />
        <Route exact path={"/settings"} component={Settings} />
        <Route exact path={["/profile", "/teams"]} component={Info} />
      </div>
    </div>
  );
}

export default App;
