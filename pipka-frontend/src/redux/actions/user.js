import { userApi } from "utils/api";

const actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  setUserIsAuth: (bool) => ({
    type: "USER:SET_IS_AUTH",
    payload: bool,
  }),
  fetchUserData: () => (dispatch) => {
    userApi
      .getMe()
      .then(({ data }) => {
        dispatch(actions.setUserData(data));
      })
      .catch((err) => {
        if (err.response.status === 403) {
          dispatch(actions.setUserIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      if (data.status !== "error") {
        window.axios.defaults.headers.common["token"] = data.token;
        window.localStorage["token"] = data.token;
        dispatch(actions.fetchUserData());
        dispatch(actions.setUserIsAuth(true));
      }
      return data;
    });
  },
  fetchUserRegister: (postData) => () => {
    console.log(postData);
    return userApi.register(postData);
  },
};

export default actions;
