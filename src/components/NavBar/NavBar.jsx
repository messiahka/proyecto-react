import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img src="./Imgs/logo2.png" alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/category/standard">Standard</Link>
          </li>
          <li>
            <Link to="/category/premium">Premium</Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
