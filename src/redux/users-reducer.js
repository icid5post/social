const FETCHING_USERS_SUCCESS = "FETCHING_USERS_SUCCESS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

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

const initialState = {
  users: [
    // {
    //     id: 1,
    //     name: "Valera",
    //     follow: true,
    //     country: "Ukraina",
    //     status: "Hello i'm BOSS"
    // },
    // {
    //     id: 2,
    //     name: "Yarik",
    //     follow: false,
    //     country: "Ukraina",
    //     status: "Hello i'm BOSS"
    // },
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      };
    }
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload) {
            return {
              ...user,
              follow: true
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
              follow: false
            };
          } else {
            return user;
          }
        })
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
