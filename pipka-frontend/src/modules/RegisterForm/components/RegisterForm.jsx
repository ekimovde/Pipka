import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button } from "components";

import { Checkbox } from "antd";

import { validateField } from "utils/helpers";

const success = false;

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return !success ? (
    <div className="auth__content">
      <div className="header">
        <h1>Sign up</h1>
        <p>Welcome to the official Chat web-client</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="offer">
          <div className="offer__block">
            <input
              id="name"
              className={classNames(
                "offer__input",
                validateField("name", errors, touched).class
              )}
              type="text"
              placeholder="Enter you name"
              value={values.name || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__block">
            <input
              id="middleName"
              className={classNames(
                "offer__input",
                validateField("middleName", errors, touched).class
              )}
              type="text"
              placeholder="Enter you middle name"
              value={values.middleName || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__block">
            <input
              id="lastName"
              className={classNames(
                "offer__input",
                validateField("lastName", errors, touched).class
              )}
              type="text"
              placeholder="Enter you surname"
              value={values.lastName || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__block">
            <input
              id="email"
              className={classNames(
                "offer__input",
                validateField("email", errors, touched).class
              )}
              type="text"
              placeholder="Enter you email"
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
              placeholder="Enter you password"
              value={values.password || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__block">
            <input
              id="confirmPassword"
              className={classNames(
                "offer__input",
                validateField("confirmPassword", errors, touched).class
              )}
              type="password"
              placeholder="Enter you confirm password"
              value={values.confirmPassword || ""}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="offer__reset offer__reset-checked">
            <Checkbox>I'm a coach</Checkbox>
          </div>
        </div>

        <Button onClick={handleSubmit} size="lg">
          Sign up
        </Button>

        <div className="offer__footer">
          <p>Already have an account?</p>
          <Link to="/login" className="footer__link">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  ) : (
    <div className="auth__content">
      <div className="header">
        <h1>Confirm your account</h1>
        <p>
          An email with a link to confirm your account has been sent to your
          email address
        </p>
      </div>

      <Button onClick={handleSubmit}>Sign in</Button>
    </div>
  );
};

export default RegisterForm;
