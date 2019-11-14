import React from "react";
import UsersList from "./UsersList";
import { connect } from "react-redux";
import {
  fetchingUsers,
  followUser,
  unfollowUser
} from "../../../redux/users-reducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    folowUser: userId => dispatch(followUser(userId)),
    unfolowUser: userId => dispatch(unfollowUser(userId)),
    fetchingUsers: users => dispatch(fetchingUsers(users))
  };
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

export default UsersListContainer;
