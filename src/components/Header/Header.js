import React from "react";
import logo from "../../images/logo/logo.png";
import classes from "./Heade.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
