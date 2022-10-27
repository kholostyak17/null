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
      <div className="container nav-content">
        <div className="nav-aux-item" />
        <div className="nav-center-item">
          <Link to="/" className="no-style">
            <span className="nav-logo" data-testid="logo">
              null
            </span>
          </Link>
          <span className="nav-credits">
            by{" "}
            <a
              className="no-style"
              href="https://github.com/kholostyak17"
              target="_blank"
              style={{ cursor: "pointer" }}
              rel="noreferrer"
            >
              @kholostyak17
            </a>
          </span>
        </div>
        <div
          data-testid="cart"
          onClick={() => {
            if (itemsCount) {
              dispatch(resetCart());
              alert(
                "You have successfully removed the products from your cart."
              );
            }
          }}
          className={`cart-box ${Boolean(!itemsCount) && "no-hover"}`}
        >
          <img src="icons/cart.svg" width="24px" />
          <div className="items-count">{itemsCount ? itemsCount : ""}</div>
        </div>
      </div>
      {Boolean(currentItem) && (
        <div className="container nav-second-row">
          <Link to="/" className="back-button">
            <img src="icons/back.svg" width="24px" />
          </Link>
          <div className="breadcrumb">
            <Link to="/" className="no-style">
              <span className="breadcrumb-link">Smartphones</span>
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
