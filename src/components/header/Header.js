import React from "react";
import logo from "../../images/logo/logo.png";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
