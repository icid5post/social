import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { messageChange, sendMessage } from "../../redux/dialog-reducer";
import { Redirect, withRouter } from "react-router-dom";
import { compose } from "redux";
import { WithAutorization } from "../../components/Hoc/WithAutorization";

class DialogsContainer extends React.Component {
  render() {
    return <Dialogs {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    dialogPage: state.dialogPage,
    isAuth: state.authReducer.isAuth
  };
};

const mapDispatchToProps = {
  messageChange,
  sendMessage
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
  // WithAutorization,
)(DialogsContainer);
