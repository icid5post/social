import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getUser, logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    //  this.props.getUser()
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <Header
        authUser={this.props.authUser}
        logout={this.logout}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authReducer.user,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = {
  getUser,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
