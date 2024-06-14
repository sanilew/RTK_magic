import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items =
    useSelector((state) => {
      console.log(state);
      return state.cart;
    }) || [];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>RTK-State Management</span>
      <div>
        <Link
          to={"/"}
          style={{
            color: "blue",
            fontWeight: "bold",
            textDecoration: "none",
            margin: "2rem",
          }}
        >
          Home
        </Link>
        <Link
          to={"/cart"}
          style={{
            color: "blue",
            fontWeight: "bold",
            textDecoration: "none",
            margin: "2rem",
          }}
        >
          Cart
        </Link>
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            textDecoration: "none",
            margin: "2rem",
          }}
        >
          Cart Items: {items.length}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
