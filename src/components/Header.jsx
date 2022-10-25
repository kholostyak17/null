import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const itemsCount = useSelector((state) => state.products.cart);

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
      <div>- {itemsCount.length} items in cart</div>
    </div>
  );
};

export default Header;
