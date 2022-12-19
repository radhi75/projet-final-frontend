import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Navigation.css";
import { Link, useSearchParams } from "react-router-dom";
import { logout } from "../redux/Action/Authaction";
const Navigation = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.authreducer.client);
  console.log(client);
  return (
    <div className="menu">
      {!client ? (
        <nav>
          <a>
            <Link to="/">Home</Link>
          </a>

          <a>
            <Link to="/login">Login</Link>
          </a>
          <a>
            <Link to="/register">Register</Link>
          </a>
          <div className="animation start-home"></div>
        </nav>
      ) : (
        <nav>
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/profile">Profile</Link>
          </a>
          <a>
            <Link to="/product">Product</Link>
          </a>
          <a>
            <Link to="/addproduct">Add</Link>
          </a>
          <a>
            <Link to="/" onClick={() => dispatch(logout())}>
              Logout
            </Link>
          </a>

          <div className="animation start-home"></div>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
