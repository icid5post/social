const DIALOG_TEXT_CHANGE = "DIALOG_TEXT_CHANGE";
const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE";

export const dialogMessageChangeCreator = value => ({
  type: DIALOG_TEXT_CHANGE,
  payload: value
});

export const addDialogMessageCreator = () => ({
  type: ADD_DIALOG_MESSAGE
});

const initialState = {
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
  newMessageBody: "test"
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_TEXT_CHANGE:
      return {
        ...state,
        newMessageBody: action.payload
      };
    case ADD_DIALOG_MESSAGE:
      const newMessage = {
        id: 3,
        message: state.newMessageBody
      };
      state.newMessageBody = "";
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: ""
      };
    default:
      return state;
  }
};

export default dialogReducer;
