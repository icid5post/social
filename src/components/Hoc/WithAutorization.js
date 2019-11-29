import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const WithAutorization = Component => {
  class Wrapper extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;

      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
  });

  return connect(mapStateToProps)(Wrapper);
};
