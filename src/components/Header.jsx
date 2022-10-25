import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../store/features/productsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state) => state.products.cartItems);
  const currentItem = useSelector((state) => state.products.currentItem);

  return (
    <div className="header" data-testid="header">
      <div className="container">
        <div />
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
        <div onClick={() => dispatch(resetCart())}>
          - {itemsCount} items in cart
        </div>
      </div>
      {Boolean(currentItem) && (
        <div className="container">
          <Link to="/">
            <button>back</button>
          </Link>
          <div onClick={() => dispatch(resetCart())}>
            <Link to="/">
              <span>Smartphones</span>
            </Link>
            <span> / </span>
            <span>{currentItem}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
