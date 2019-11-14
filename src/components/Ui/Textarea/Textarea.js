import React from "react";
import classes from "./Textarea.module.scss";

const Textarea = React.forwardRef((props, ref) => {
  return (
    <textarea
      name={props.name}
      id={props.id}
      cols={props.cols}
      rows={props.rows}
      className={classes.textarea}
      value={props.value}
      ref={ref}
      onChange={props.onChange}
    >
      {props.children}
    </textarea>
  );
});

export default Textarea;
