import React from "react";
import classes from "./Button.module.scss";

const Button = props => {
  const cls = [classes.default, classes[props.color]];

  return (
    <button {...props} className={cls.join(" ")}>
      {props.children}
    </button>
  );
};

export default Button;
