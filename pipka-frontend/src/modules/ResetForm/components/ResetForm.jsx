import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button } from "components";

import { validateField } from "utils/helpers";

const ResetForm = (props) => {
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
        <h1>Password Reset</h1>
        <p>Enter your email address to reset password</p>
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
        </div>

        <Button onClick={handleSubmit}>Send Reset Link</Button>

        <div className="offer__footer">
          <p>Already have an account?</p>
          <Link to="/login" className="footer__link">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetForm;
