import React from "react";
import classes from "./Comment.module.scss";

const Comment = props => {
  return (
    <div className={classes.comment}>
      <div className={classes.comment__avatar}></div>
      <div className={classes.comment__text}>{props.message}</div>
    </div>
  );
};

export default Comment;
