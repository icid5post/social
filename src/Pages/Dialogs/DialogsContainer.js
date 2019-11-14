import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addDialogMessageCreator,
  dialogMessageChangeCreator
} from "../../redux/dialog-reducer";

const mapStateToProps = state => {
  return {
    dialogPage: state.dialogPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDialogMessage: body => {
      console.log(body);
      dispatch(dialogMessageChangeCreator(body));
    },
    sendDialogMessage: () => dispatch(addDialogMessageCreator())
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
