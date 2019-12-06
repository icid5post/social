import { usersApi } from "../api/api";
import * as axios from "axios/index";

const FETCHING_USERS_SUCCESS = "FETCHING_USERS_SUCCESS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const FOLLOW_FETCHING = "FOLLOW_FETCHING";

export const fetchingUsers = users => {
  return {
    type: FETCHING_USERS_SUCCESS,
    payload: users
  };
};

export const followUser = userId => {
  return {
    type: FOLLOW,
    payload: userId
  };
};

export const unfollowUser = userId => {
  return {
    type: UNFOLLOW,
    payload: userId
  };
};

export const setCurrentPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  };
};

export const setFollowFetching = (isFetching, id) => {
  return {
    type: FOLLOW_FETCHING,
    isFetching: isFetching,
    userId: id
  };
};

const initialState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 5,
  followedProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload.items,
        totalCount: action.payload.totalCount
      };
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: true
            };
          } else {
            return user;
          }
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return {
              ...user,
              followed: false
            };
          } else {
            return user;
          }
        })
      };
    }
    case FOLLOW_FETCHING: {
      return {
        ...state,
        followedProgress: action.isFetching
          ? [...state.followedProgress, action.userId]
          : state.followedProgress.filter(id => id !== action.userId)
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      };
    }
    default:
      return state;
  }
};

export const requestUsers = (currentPage, pageSize) => dispatch => {
  usersApi.getUsers(currentPage, pageSize).then(data => {
    dispatch(fetchingUsers(data));
  });
  dispatch(setCurrentPage(currentPage));
};

const followUnfollowFlow = async (
  dispatch,
  apiMethod,
  userId,
  actionCreator
) => {
  dispatch(setFollowFetching(true, userId));
  let response = await apiMethod(userId);
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(setFollowFetching(false, userId));
};

export const followSuccess = id => async dispatch => {
  let method = usersApi.followUser.bind(usersApi);
  let actionCreator = followUser;
  followUnfollowFlow(dispatch, method, id, actionCreator);
};

export const unfollowSuccess = id => async dispatch => {
  let method = usersApi.unfollowUser.bind(usersApi);
  let actionCreator = unfollowUser;
  followUnfollowFlow(dispatch, method, id, actionCreator);
};

export default usersReducer;
