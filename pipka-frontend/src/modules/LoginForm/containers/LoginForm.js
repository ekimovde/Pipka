import { withFormik } from "formik";

import LoginForm from "../components/LoginForm";

import validateForm from "utils/validate";
import { userActions } from "redux/actions";

import store from "redux/store";

const loginFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, setStatus, props }) => {
    store
      .dispatch(userActions.fetchUserLogin(values))
      .then((data) => {
        setStatus(data.status);
        setSubmitting(false);
        if (data.status === "success") {
          setTimeout(() => {
            props.history.push("/");
          }, 50);
        }
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: "LoginForm",
})(LoginForm);

export default loginFormContainer;
