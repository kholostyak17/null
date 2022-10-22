import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img className="nav-logo" src="/logo.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
