import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button } from "components";

const LoginForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
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
              className={classNames("offer__input", {
                error: status === "error",
                success: status === "success",
              })}
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
              className={classNames("offer__input", {
                error: status === "error",
                success: status === "success",
              })}
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

        {status === "error" && (
          <p className="offer__message">Email or password invalid!</p>
        )}

        <Button disabled={isSubmitting} onClick={handleSubmit}>
          Sign In
        </Button>

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
