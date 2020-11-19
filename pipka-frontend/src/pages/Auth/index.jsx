import React from "react";
import { Route } from "react-router-dom";

import "./Auth.scss";

import { LoginForm, RegisterForm, ResetForm } from "modules";

const Auth = () => {
  return (
    <section className="auth">
      <Route exact path={["/", "/login"]} component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/reset" component={ResetForm} />
    </section>
  );
};

export default Auth;
