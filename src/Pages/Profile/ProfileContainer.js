import React from "react";
import Profile from "./Profile";
import {
  addPost,
  getProfile,
  getProfileStatus,
  postTextChange,
  updateProfileStatus
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { WithAutorization } from "../../components/Hoc/WithAutorization";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUser.id;
      console.log(userId);
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => ({
  authUser: state.authReducer.user,
  user: state.profilePage.user,
  status: state.profilePage.status,
  myPosts: state.profilePage.myPosts
});

const mapDispatchToProps = {
  getProfile,
  getProfileStatus,
  updateProfileStatus,
  addPost,
  postTextChange
};

export default compose(
  // WithAutorization,
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfileContainer);
