import classes from "./DialogItem.module.scss";

import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, link }) => {
  return (
    <NavLink
      to={link}
      className={classes.dialogItem}
      activeClassName={classes.dialogItem_active}
    >
      <div className={classes.dialogItem__img}></div>
      {name}
    </NavLink>
  );
};

export default DialogItem;
