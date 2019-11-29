import { authApi } from "../api/api";

const SET_USER = "SET_USER";

const initialState = {
  user: {},
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      debugger;
      return {
        ...state,
        user: action.payload.user,
        isAuth: action.payload.isAuth
      };
    }
    default:
      return state;
  }
};

export const setUser = (user, isAuth) => ({
  type: SET_USER,
  payload: {
    user: user,
    isAuth: isAuth
  }
});

export const getUser = () => dispatch => {
  return authApi.getUser().then(response => {
    if (response.resultCode === 0) {
      dispatch(setUser(response.data, true));
    }
  });
};

export const login = (email, password, rememberMe) => dispatch => {
  authApi.login(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(getUser());
    }
  });
};

export const logout = () => dispatch => {
  authApi.logout().then(response => {
    if (response.resultCode === 0) {
      dispatch(setUser([], false));
    }
  });
};

export default authReducer;
