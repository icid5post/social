import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  postTextChangeActionCreator
} from "../../../redux/profile-reducer";

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewPost: () => dispatch(addPostActionCreator()),
    addPostHandler: message => {
      console.log(message);
      dispatch(postTextChangeActionCreator(message));
    }
  };
};

const MyPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostContainer;
