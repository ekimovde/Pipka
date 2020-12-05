import { userApi } from "utils/api";

const actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      if (data.status !== "error") {
        window.axios.defaults.headers.common["token"] = data.token;
        window.localStorage["token"] = data.token;
        dispatch(actions.fetchUserData());
      }
      return data;
    });
  },
  fetchUserRegistration: (postData) => (dispatch) => {
    console.log(postData);
    return userApi.register(postData).then(({ data }) => {
      console.log(data);
      // if (data.status !== "error") {

      // }
      return data;
    });
  },
};

export default actions;
