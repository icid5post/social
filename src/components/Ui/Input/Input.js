import React from "react";
import classes from "./Input.module.scss";

const Input = ({ meta, input, ...props }) => {
  return (
    <div>
      <input {...input} {...props} className={classes.input} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

export default Input;
