import React from "react";
import logo from "../../images/logo/logo.png";
import classes from "./Heade.module.scss";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.authBlock}>
        {props.isAuth ? (
          <div>
            {props.authUser.login}
            <button onClick={props.logout}>logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
