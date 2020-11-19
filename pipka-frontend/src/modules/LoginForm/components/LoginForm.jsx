import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button } from "components";

import { validateField } from "utils/helpers";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div className="auth__content">
      <div className="header">
        <h1>Sign in</h1>
        <p>Welcome to the official Chat web-client</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="offer">
          <div className="offer__block">
            <input
              id="email"
              className={classNames(
                "offer__input",
                validateField("email", errors, touched).class
              )}
              type="text"
              placeholder="Enter your email"
              value={values.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__block">
            <input
              id="password"
              className={classNames(
                "offer__input",
                validateField("password", errors, touched).class
              )}
              type="password"
              placeholder="Enter your password"
              value={values.password || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__reset">
            <Link to="/reset" className="footer__link">
              Reset password
            </Link>
          </div>
        </div>

        <Button onClick={handleSubmit}>Sign In</Button>

        <div className="offer__footer">
          <p>Don't have an account yet?</p>
          <Link to="/register" className="footer__link">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
