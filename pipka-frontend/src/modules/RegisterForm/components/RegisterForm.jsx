import React from "react";
import { Link } from "react-router-dom";

import { Button, FormField } from "components";
import { Checkbox } from "antd";

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <div className="auth__content">
      <div className="header">
        <h1>Sign up</h1>
        <p>Welcome to the official Chat web-client</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="offer">
          <FormField
            name="fullName"
            type="text"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />

          <FormField
            name="email"
            type="text"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />

          <FormField
            name="password"
            type="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />

          <FormField
            name="confirmPassword"
            type="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
          />

          <div className="offer__reset offer__reset-checked">
            <Checkbox>I'm a coach</Checkbox>
          </div>
        </div>

        <Button disabled={isSubmitting} onClick={handleSubmit}>
          Sign Up
        </Button>

        <div className="offer__footer">
          <p>Already have an account?</p>
          <Link to="/login" className="footer__link">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
