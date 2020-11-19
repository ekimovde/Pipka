export default ({ isAuth, values, errors, pass }) => {
  const rules = {
    name: (value) => {
      if (!value) {
        errors.name = 'Введите имя'
      } else if (!/^(?=.*[а-я])(?=.*[А-Я])(?=.{2,})/i.test(value)) {
        errors.name = 'Неверное имя'
      }
    },
    middleName: (value) => {
      if (!value) {
        errors.middleName = 'Введите отчество'
      } else if (!/^(?=.*[а-я])(?=.*[А-Я])(?=.{4,})/i.test(value)) {
        errors.middleName = 'Неверное отчество'
      }
    },
    lastName: (value) => {
      if (!value) {
        errors.lastName = 'Введите фамилию'
      } else if (!/^(?=.*[а-я])(?=.*[А-Я])(?=.{4,})/i.test(value)) {
        errors.lastName = 'Неверная фамилия'
      }
    },
    email: (value) => {
      if (!value) {
        errors.email = 'Введите E-Mail';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неверный E-Mail';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите пароль'
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Слишком лёгкий пароль'
      }
    },
    confirmPassword: (value) => {
      if (!value) {
        errors.confirmPassword = 'Повторите пароль'
      } else if (value !== pass) {
        errors.confirmPassword = 'Пароли не совпадают'
      }
    }
  }

  Object.keys(values).forEach(
    key => rules[key] && rules[key](values[key])
  );
};
