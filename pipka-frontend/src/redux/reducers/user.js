const initialState = {
  data: null,
  token: window.localStorage.token,
  verified: false,
  // isAuth: !!window.localStorage.token,
  isAuth: window.localStorage.token ? true : false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER:SET_DATA":
      return {
        ...state,
        data: payload,
        token: window.localStorage.token,
        verified: true,
        isAuth: true,
      };
    default:
      return state;
  }
};
