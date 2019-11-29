import { authApi } from "../api/api";
import { getUser } from "./auth-reducer";

const INITIALIZED_APP = "INITIALIZED_APP";

const initialState = {
  initializedApp: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_APP: {
      return {
        ...state,
        initializedApp: true
      };
    }
    default:
      return state;
  }
};

export const initializedAppSuccess = () => ({
  type: INITIALIZED_APP
});

export const initializedApp = () => dispatch => {
  dispatch(getUser()).then(() => {
    dispatch(initializedAppSuccess());
  });
};

export default appReducer;
