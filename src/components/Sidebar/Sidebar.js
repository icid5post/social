import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={classes.appNav}>
      <ul className={classes.navList}>
        <li className={classes.navList__item}>
          <NavLink to="/profile" activeClassName={classes.navActive}>
            Profile
          </NavLink>
        </li>
        <li className={classes.navList__item}>
          <NavLink to="/dialogs" activeClassName={classes.navActive}>
            Message
          </NavLink>
        </li>
        <li className={classes.navList__item}>
          <NavLink to="/users" activeClassName={classes.navActive}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
