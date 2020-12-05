import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Auth, Messenger, Tasks, Settings } from "pages";
import { Navbar, Sidebar, Info } from "components";

const App = ({ isAuth }) => {
  return (
    <div className="app">
      <Route
        exact
        path={[
          "/teams",
          "/messenger",
          "/profile",
          "/settings",
          "/tasks",
          "/dialog/:id",
        ]}
        component={Navbar}
      />
      <Route
        exact
        path={[
          "/teams",
          "/messenger",
          "/profile",
          "/settings",
          "/tasks",
          "/dialog/:id",
        ]}
        component={Sidebar}
      />

      <div className="main">
        <Route
          exact
          path={["/", "/login", "/register", "/reset", "/register/verify"]}
          component={Auth}
        />
        <Route
          exact
          path={["/messenger", "/dialog/:id"]}
          component={Messenger}
        />
        <Route exact path={"/tasks"} component={Tasks} />
        <Route exact path={"/settings"} component={Settings} />
        <Route exact path={["/profile", "/teams"]} component={Info} />
      </div>

      {/* <Route
        path="/"
        render={() =>
          isAuth ? <Redirect to="/messenger" /> : <Redirect to="/login" />
        }
      /> */}
      {isAuth ? <Redirect to="/profile" /> : <Redirect to="/login" />}
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
