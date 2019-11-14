import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

export const ADD_POST = "AD_POST";
export const POST_TEXT_CHANGE = "POST_TEXT_CHANGE";

export const DIALOG_TEXT_CHANGE = "DIALOG_TEXT_CHANGE";
export const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE";

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const postTextChangeActionCreator = value => ({
  type: POST_TEXT_CHANGE,
  payload: value
});

export const dialogMessageChangeCreator = value => ({
  type: DIALOG_TEXT_CHANGE,
  payload: value
});

export const addDialogMessageCreator = () => ({
  type: ADD_DIALOG_MESSAGE
});

export const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "hello"
        },
        {
          id: 2,
          message: "hello it is seccond post"
        }
      ],
      newPostText: "Add comment"
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Alex"
        },
        {
          id: 2,
          name: "Jama"
        },
        {
          id: 3,
          name: "Vitalik"
        }
      ],
      messages: [
        {
          id: 1,
          message: "Hello"
        },
        {
          id: 2,
          message: "Hello Kurwa"
        }
      ],
      newMessageBody: ""
    }
  },
  _rerenderEntireTree() {
    console.log("render has been filed");
  },
  getState() {
    return this._state;
  },
  subscribe(observe) {
    this._rerenderEntireTree = observe;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._rerenderEntireTree(this._state);
  }
};
