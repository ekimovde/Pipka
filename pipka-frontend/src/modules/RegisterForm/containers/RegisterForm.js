import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';
import validateForm from 'utils/validate';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    name: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),
  validate: values => {
    let errors = {};
    let pass = values.password;

    validateForm({ isAuth: false, values, errors, pass });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "RegisterForm"
})(RegisterForm);
