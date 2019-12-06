import { profileApi } from "../api/api";

const ADD_POST = "AD_POST";
const DELETE_POST = "DELETE_POST";
const POST_TEXT_CHANGE = "POST_TEXT_CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE_PROFILE_STATUS";

export const addPost = () => ({
  type: ADD_POST
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

export const postTextChange = value => ({
  type: POST_TEXT_CHANGE,
  payload: value
});

export const setUserProfile = user => ({
  type: SET_USER_PROFILE,
  payload: user
});

export const setProfileStatus = value => ({
  type: SET_PROFILE_STATUS,
  payload: value
});

export const changeProfileStatus = value => ({
  type: UPDATE_PROFILE_STATUS,
  payload: value
});

const initialState = {
  user: {
    fullName: "",
    photos: {
      large: "",
      small: ""
    }
  },
  status: "",
  myPosts: {
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
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        user: action.payload
      };
    case POST_TEXT_CHANGE:
      const newText = action.payload;
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          newPostText: newText
        }
      };
    case SET_PROFILE_STATUS: {
      return {
        ...state,
        status: action.payload
      };
    }
    case ADD_POST: {
      const newPost = {
        id: 3,
        message: state.newPostText
      };
      return {
        ...state,
        myPosts: {
          newPostText: "",
          posts: [...state.myPosts.posts, newPost]
        }
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        myPosts: {
          ...state.myPosts,
          posts: state.myPosts.posts.filter(item => item.id !== action.payload)
        }
      };
    }
    default:
      return state;
  }
};

export const getProfile = userId => dispatch => {
  profileApi.getProfile(userId).then(response => {
    dispatch(setUserProfile(response));
  });
};

export const getProfileStatus = userId => dispatch => {
  profileApi.getProfileStatus(userId).then(response => {
    dispatch(setProfileStatus(response));
  });
};

export const updateProfileStatus = status => dispatch => {
  profileApi.updateProfileStatus(status).then(response => {
    if (response.resultCode === 0) {
      dispatch(setProfileStatus(status));
    }
  });
};

export default profileReducer;
