import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Button from "../Button";

function Header() {
  const location = useLocation();

  return (
    <div className={`${location.pathname === "/" && "shadow"}`}>
      <header className="navStyle">
        <img src={logo} alt="Logo" />
        <div className="displayFlexHeader">
          <ul className="displayFlexHeaderUl mergedHeader">
            <li className="mergedHeader">
              <Link to="/">Product</Link>
            </li>
            <li className="mergedHeader">
              <Link to="/landing">Pricing</Link>
            </li>
            <li className="mergedHeader">
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Button
            text={location.pathname === "/" ? "Get Started" : "Sing Up"}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
