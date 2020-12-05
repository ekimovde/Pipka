import { withFormik } from "formik";

import RegisterForm from "../components/RegisterForm";
import validateForm from "utils/validate";

import { userActions } from "redux/actions";
import store from "redux/store";

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, setStatus, props }) => {
    store
      .dispatch(userActions.fetchUserRegistration(values))
      .then((data) => {
        setStatus(data.status);
        setSubmitting(false);
        console.log(data.status);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: "RegisterForm",
})(RegisterForm);
