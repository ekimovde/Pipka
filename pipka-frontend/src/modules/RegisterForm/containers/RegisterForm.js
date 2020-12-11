import { withFormik } from "formik";

import RegisterForm from "../components/RegisterForm";

import validateForm from "utils/validate";
import { userActions } from "redux/actions";

import store from "redux/store";

const registerFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isCoach: false,
  }),
  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting, setStatus, props }) => {
    const postData = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      isCoach: values.undefined,
    };
    store
      .dispatch(userActions.fetchUserRegister(postData))
      .then((data) => {
        setStatus(data.status);
        props.history.push("/register/verify");
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: "RegisterForm",
})(RegisterForm);

export default registerFormContainer;
