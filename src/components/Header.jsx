import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <img className="nav-logo" src="/logo.png" alt="" />
        </Link>
        by{" "}
        <a
          className="no-style"
          href="https://github.com/kholostyak17"
          target="_blank"
          style={{ cursor: "pointer" }}
        >
          @kholostyak17
        </a>
      </div>
    </div>
  );
};

export default Header;
