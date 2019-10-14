import React from "react";

const Sidebar = () => {
  return (
    <nav className="app-nav">
      <ul className="nav-list">
        <li className="nav-list__item">
          <a href="/profile">Profile</a>
        </li>
        <li className="nav-list__item">
          <a href="/messages">Message</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
