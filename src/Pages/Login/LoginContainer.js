import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const LoginContainer = props => {
  const onSubmit = formData => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
