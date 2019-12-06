import { createSelector } from "reselect";

export const getUsers = state => {
  return state.usersPage.users;
};

export const getTotalCount = state => {
  return state.usersPage.totalCount;
};

export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};

export const getPageSize = state => {
  return state.usersPage.pageSize;
};
export const getFollowedProgress = state => {
  return state.usersPage.followedProgress;
};

export const getUsersSelector = createSelector(
  getUsers,
  users => users
);
