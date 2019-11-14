const ADD_POST = "AD_POST";
const POST_TEXT_CHANGE = "POST_TEXT_CHANGE";

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const postTextChangeActionCreator = value => ({
  type: POST_TEXT_CHANGE,
  payload: value
});

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_TEXT_CHANGE:
      const newText = action.payload;
      return {
        ...state,
        newPostText: newText
      };
    case ADD_POST: {
      const newPost = {
        id: 3,
        message: state.newPostText
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost]
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
