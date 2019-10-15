import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "../../components/Dialog-item/DialogItem";

class Dialogs extends React.Component {
  render() {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsGroup}>
          <DialogItem name={"Alex"} link={"/dialogs/1"} />
          <DialogItem name={"Alex"} link={"/dialogs/2"} />
          <DialogItem name={"Alex"} link={"/dialogs/3"} />
        </div>
      </div>
    );
  }
}

export default Dialogs;
