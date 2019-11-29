import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import ReduxThunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  authReducer: authReducer,
  form: formReducer,
  appReducer: appReducer
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
