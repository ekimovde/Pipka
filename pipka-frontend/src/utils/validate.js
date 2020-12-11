export default ({ isAuth, values, errors }) => {
  const rules = {
    fullName: (value) => {
      if (!value) {
        errors.fullName = "Введите имя и фамилию";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.{2,})/i.test(value)) {
        errors.fullName = "Неверное имя и фамилия";
      }
    },
    email: (value) => {
      if (!value) {
        errors.email = "Введите E-Mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Неверный E-Mail";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (
        isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)
      ) {
        errors.password = "Слишком лёгкий пароль";
      }
    },
    confirmPassword: (value) => {
      if (!isAuth && value !== values.password) {
        errors.confirmPassword = "Пароли не совпадают";
      } else if (!value) {
        errors.confirmPassword = "Повторите пароль";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
