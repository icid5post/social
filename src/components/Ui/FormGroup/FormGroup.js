import React from "react";
import classes from "./FormGroup.module.scss";

const FormGroup = props => {
  return <div className={classes.formGroup}>{props.children}</div>;
};

export default FormGroup;
