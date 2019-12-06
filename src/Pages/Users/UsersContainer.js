import React from "react";
import { connect } from "react-redux";
import {
  requestUsers,
  followSuccess,
  unfollowSuccess
} from "../../redux/users-reducer";
import Users from "./Users";
import {
  getCurrentPage,
  getFollowedProgress,
  getPageSize,
  getTotalCount,
  getUsers
} from "../../redux/users-selectors";

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
    users: getUsers(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    followedProgress: getFollowedProgress(state)
  };
};

const mapDispatchToProps = {
  followSuccess,
  unfollowSuccess,
  getUsers: requestUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
