import React from "react";
import styles from "./styles";
import logo from "../../assets/images/logo.png";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Button from "../Button";

function Header() {
  const location = useLocation();

  return (
    <div>
      <header
        style={
          location.pathname === "/"
            ? { ...styles.navStyle, ...styles.shadow }
            : { ...styles.navStyle }
        }
      >
        <img src={logo} alt="Logo" />

        <div style={styles.displayFlex}>
          <ul
            style={{
              ...styles.displayFlex,
              ...styles.merged,
              margin: "0 90px",
            }}
          >
            <li style={styles.merged}>
              <Link to="/">Product</Link>
            </li>
            <li style={styles.merged}>
              <Link to="/landing">Pricing</Link>
            </li>
            <li style={styles.merged}>
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
