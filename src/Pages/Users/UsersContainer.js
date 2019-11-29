import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  followSuccess,
  unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  getPages = page => {
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return <Users {...this.props} getPages={this.getPages} />;
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    followedProgress: state.usersPage.followedProgress
  };
};

const mapDispatchToProps = {
  followSuccess,
  unfollowSuccess,
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
